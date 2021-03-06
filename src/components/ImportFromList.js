import {useState, useEffect} from "react";
import { Button } from "@material-ui/core";
import {isNull} from "../helper/utils";
import { withRouter } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const ImportFromList = (props) => {
  const [file, setFile] = useState();

  function browseFile (e) {
    e.preventDefault();
    setFile(e.target.files[0]);
  }  
  function processFile(){
    const reader = new FileReader();
    reader.onload = (e) => { 
      const source = e.target.result.split("\n");
      let animes = new Map();
      source.forEach(element => {
        if(!isNull(element) && element.charCodeAt(0) !== 13){
          let anime = {
            id: uuidv4(),
            sourceTitle: element,
            malTitle: [],
            selected: {},
            import: true
          }
          animes.set(anime.id, anime);
        }
      });
      props.populateAnimes(animes);
      props.history.push("Import-MAL");
    };
    reader.readAsText(file);
  }

  useEffect(() => {
    if(isNull(props.userToken)){
      props.history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.userToken]);

  return (
    <div className="import-list-view">
      <div className="description">
        <h4>Select a text file (.txt) with one title per line.</h4>
      </div>
      <div className="file-browser">
        <input type="file" onChange={(e) => browseFile(e)} />
      </div>
      <div className="process-button">
        <Button disabled={isNull(file)} variant="contained" color="default" onClick={processFile}>Process Animes</Button>
      </div>
    </div>
  );
};

export default withRouter(ImportFromList);