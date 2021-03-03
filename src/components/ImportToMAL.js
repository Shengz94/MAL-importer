import { Fragment, useEffect, useState } from "react";
import { Button } from "@material-ui/core"
import { withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";
import AnimeImportCard from "./AnimeImportCard";
import {isNull} from "../helper/utils";
import {addToList, searchAnime} from "../helper/malAPI"

const ImportToMAL = (props) => {
  const [ready, setReady] = useState(false);
  const [animeArray, setAnimeArray] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    populateMALTitle();
  }, []);

  useEffect(() => {
    setAnimeArray([...props.animes.values()])
  }, [props.animes]);

  useEffect(() => {
    if(!isNull(animeArray) && animeArray.length >= 0){
      setReady(true);
    }
  }, [animeArray]);

  useEffect(() => {
    if(isNull(props.userToken)){
      props.history.push("/");
    }
  }, [props.userToken]);

  async function populateMALTitle(){
    let requests = [];

    props.animes.forEach(element => {
      let tempElement = element;
      requests.push(searchAnime(tempElement.sourceAnime, props.userToken));
    });
    await Promise.allSettled(requests).then(data =>{
      props.updateAnimes(data);
    });
  }

  async function importAnimes(){
    if(!isNull(props.animes)){
      let requests = [];
      let tempAnimes = [];
      let results;

      setLoading(true);
      for(const element of props.animes.values()){
        if(element.import && !isNull(element.selected) && !isNull(element.selected.id)){ 
          tempAnimes.push(element.selected.id);
          requests.push(addToList(props.userToken, element.selected.id, "complete"));
        }
      }
      await Promise.allSettled(requests).then((result) => {
        if(!isNull(result)){
          results = {
            animes: tempAnimes,
            result: result
          }
        }
      });
      setLoading(false);
      props.fillLog(results);
      props.history.push("/Result");
    }
  }

  if(isNull(props.animes) || props.animes.size <= 0){
    props.history.push("/Home");
  }

  return (
    <div className="import-mal-view">
      {loading ?
        <div className="loading-screen">
          <Loader type="ThreeDots" color="#00BFFF" height={100} width={100}/>
        </div>
        :
        <Fragment></Fragment>
      }
      {ready  && !isNull(props.animes)?
        <Fragment>
          <div className="anime-list">
            {animeArray.map(anime =>  
              <AnimeImportCard key={anime.id} 
              anime={anime} updateAnime={props.updateAnime} 
                handleImportCheckBox={props.handleImportCheckBox} 
                handleSelectedChange={props.handleSelectedChange}
              />
              )
            }
          </div>
          <div className="import-button">
            <Button variant="contained" color="default" onClick={importAnimes}>Import Animes</Button>
          </div>
        </Fragment>
        :
        <Fragment/>
      }   
    </div>
  );
};

export default withRouter(ImportToMAL);