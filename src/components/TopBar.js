import React, {Fragment}  from "react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {isNull} from "../helper/utils";
import mal_logo from "../resources/mal_logo.png"
import github_logo from "../resources/github_logo.png"

const TopBar = (props) => {

  return (
    <div className="top-bar">
        <div className="user-info">
            <div className="left-content"> 
                <div className="logo">
                    <a href="https://myanimelist.net/"><img id="mal" src={mal_logo}/></a>
                </div>
                <div className="app-title">
                    <p>MyAnimeList Importer</p>
                </div>
                <div className="logo">
                    <a href="https://github.com/Shengz94"><img id="github" src={github_logo}/></a>
                </div>
            </div>
            {isNull(props.user) ?
                <Fragment></Fragment>
                :
                <div className="right-content"> 
                    <div className="logout">
                        <ExitToAppIcon size="small" onClick={props.logout}/>
                    </div>
                    <div className="user-avatar">
                        <img src={props.user.picture} alt="Avatar"/>
                    </div>
                    <div className="user-name">
                        <span>{props.user.name}</span>
                    </div>
                </div>
            }
        </div>
    </div>
  );
};

export default TopBar;