import {isNull} from "../helper/utils";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const AnimeImportCard = (props) => {
  
  return (
    <div className="anime-import-card">
      <div className="checkbox-import">
        <input type="checkbox" disabled={isNull(props.anime.malTitle[0])} checked={props.anime.import} onChange={() => props.handleImportCheckBox(props.anime.id)} />
      </div>
      <div className="right-content">
        <div className="source-name">
          <span><b>Input title</b>: {props.anime.sourceTitle}&nbsp;</span>
        </div>
        <div className="mal-title">
          {!isNull(props.anime.selected) ?
            <label>
              <b>MAL title</b>: 
              <select 
                value={!isNull(props.anime.selected) ? JSON.stringify(props.anime.selected) : ""} 
                onChange={(e) => props.handleSelectedChange(props.anime.id, e.target.value)}>
                  {props.anime.malTitle.map((element) => {
                    return <option key={element.id} value={JSON.stringify(element)}>
                        {"MAL ID " + element.id + ": " + element.title}
                      </option>
                  })}
              </select>
              <a href={"https://myanimelist.net/anime/" + props.title.selected.id} target="_blank" rel="noopener noreferrer"><OpenInNewIcon /></a>
            </label>
            :
            <span><b>No title found on MAL</b></span>
          }
        </div>
      </div>
    </div>    
  );
};

export default AnimeImportCard;