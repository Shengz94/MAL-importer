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
                    <a href="https://myanimelist.net/"><img id="mal" src={mal_logo} alt="MAL"/></a>
                </div>
                <div className="app-title">
                    <p>MyAnimeList Importer</p>
                </div>
                <div className="logo">
                    <a href="https://github.com/Shengz94"><img id="github" src={github_logo} alt="GitHub"/></a>
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
                        <a href={"https://myanimelist.net/profile/" + props.user.name}>
                            <img src={props.user.picture} alt="Avatar"/>
                        </a>
                    </div>
                    <div className="user-name">
                        <a href={"https://myanimelist.net/profile/" + props.user.name}>
                        <span>{props.user.name}</span>
                        </a>
                    </div>
                </div>
            }
        </div>
    </div>
  );
};

export default TopBar;