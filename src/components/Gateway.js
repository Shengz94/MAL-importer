import React, {Fragment, useEffect, useState}  from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ImportFromList from "./ImportFromList";
import ImportToMAL from "./ImportToMAL";
import Login from "./Login";
import Result from "./Result";
import {getToken, getUserInfo} from "../helper/malAPI";
import {isNull} from "../helper/utils";
import TopBar from "./TopBar";

const Gateway = () => {
  const [animes, setAnimes] = useState(new Map());
  const [log, setLog] = useState([]);
  const [user, setUser] = useState();
  const [userToken, setUserToken] = useState(localStorage.getItem("userToken-MAL"));
  useEffect(() => {
    localStorage.setItem("userToken-MAL", userToken);
    if(!isNull(userToken)){
      getUserInfo(userToken).then((data) => {
        setUser(data);
      });
    }
  }, [userToken]);

  useEffect(() => {
    if(isNull(userToken)){
      let params = new URLSearchParams(window.location.search);
      let code = params.get("code");
      if(!isNull(code)){
        let codeVerifier = localStorage.getItem("codeVerifier");
        getToken(code, codeVerifier).then((data) => {
          setUserToken(data.access_token);
        });
      }
    }
    else{
      getUserInfo(userToken).then((data) => {
        setUser(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function logout(){
    //revokeToken(userToken); Not available at MAL API yet
    setUserToken(undefined);
    setUser(undefined);
  }

  function populateAnimes(input){
    setAnimes(input);
  }

  function updateAnime(id, newAnime){
    let tempAnimes = new Map(animes);
    tempAnimes.set(id, newAnime);
    setAnimes(tempAnimes);
  }

  function updateAnimes(data){
    let tempAnimes = new Map(animes);
    let idx = 0;
    tempAnimes.forEach(element => {
      if(data[idx].status === "fulfilled"){
        element.malTitle = data[idx].value;
        element.selected = data[idx].value[0];
      }
      else{
        element.import = false;
      }
      idx++;
    });
    setAnimes(tempAnimes)
  }

  function handleSelectedChange(id, anime){
    let tempAnime = animes.get(id);
    tempAnime.selected = JSON.parse(anime);
    updateAnime(id, tempAnime);
  }

  function handleImportCheckBox(id){
    let tempAnime = animes.get(id);
    tempAnime.import = !tempAnime.import;
    updateAnime(id, tempAnime);
  }

  function fillLog(results){
    let importedSet = new Set(results.animes);
    let tempLog = [];
    animes.forEach( anime => {
      let result = "-";
      if(anime.import){
        if(!isNull(anime.selected)){
          if(!isNull(results) && (importedSet.has(anime.selected.id))){
              result = anime.sourceTitle + " imported to MAL as ///startTitle///" 
                + anime.selected.title + " (ID:" + anime.selected.id 
                + "). ///end///https://myanimelist.net/anime/" + anime.selected.id;
          }
          else{
            result = "There were a problem importing " + anime.sourceTitle + " to MAL. ";
          }
        }
        else{
          result = anime.sourceTitle + " NOT found in MAL. "; 
        }
      }
      else{
        result = anime.sourceTitle + " NOT imported to MAL. "
      }
      tempLog.push(result);
    });
    setLog(tempLog);
  }

  return (
    <Fragment>
      <TopBar user={user} logout={logout}/> 
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/"> 
            <Login userToken={userToken}/>
          </Route>
          <Route exact path="/Home">
            <ImportFromList userToken={userToken} populateAnimes={(input) => populateAnimes(input)}/>
          </Route>
          <Route exact path="/Import-MAL" render={() => (
            <ImportToMAL animes={animes} userToken={userToken} log={log}
              updateAnimes={updateAnimes} fillLog={fillLog}
              handleSelectedChange={handleSelectedChange}
              handleImportCheckBox={handleImportCheckBox}
            />
          )}/>
          <Route exact path="/Result" render={() => (
            <Result userToken={userToken} log={log} />
          )}/>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default Gateway;