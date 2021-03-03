import {isNull} from './utils'

const MAL_API_KEY = "194e0811df1955e98ce8c7594b114989";
const MAL_API_SECRET = "b1d22172346c467dcec1ce6d5dab8fc9c8caad25f26a43279f99771dba0da9f9";
const MAL_DOMAIN_V1 = "https://myanimelist.net/v1";
const MAL_DOMAIN_V2 = "https://shrouded-savannah-10975.herokuapp.com/https://api.myanimelist.net/v2";
const MAL_AUTHENTICATE = "/oauth2/authorize";
const MAL_GET_TOKEN = "/oauth2/token";
const MAL_GET_USER = "/users/@me";
const MAL_GET_ANIME = "/anime";
const MAL_PUT_ANIME = "/anime/";
const MAL_REDIRECT_URI = "http://localhost:3000/";

function authenticationURI(code_challenge){
    let body = new URLSearchParams();
    body.append("response_type", "code");
    body.append("client_id", MAL_API_KEY);
    body.append("redirect_uri", MAL_REDIRECT_URI);
    body.append("code_challenge", code_challenge);
    body.append("code_challenge_method", "plain");

    return MAL_DOMAIN_V1 + MAL_AUTHENTICATE + "?" + body.toString();
}
function getToken(code, codeVerifier){
    let body = new URLSearchParams();
    body.append("client_id", MAL_API_KEY);
    body.append("client_secret", MAL_API_SECRET);
    body.append("grant_type", "authorization_code");
    body.append("code", code);
    body.append("redirect_uri", MAL_REDIRECT_URI);
    body.append("code_verifier", codeVerifier);

    let endpoint = MAL_DOMAIN_V1 + MAL_GET_TOKEN;// + "?" + params.toString();

    let params = {
        header:{
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: body,
        method: "post"
    };

    return fetch(endpoint, params).then((response) => {
        console.log(response);
        return response.json();
    }).then((data) => {
        console.log(data);
        var result = {
            access_token: data.access_token,
            expireIn: data.expires_in,
            refreshToken: data.refresh_token
        };

        return result;
    });
}

//https://api.myanimelist.net/v2/users/{user_name} //only @me user is available for now
function getUserInfo(token){
    let endpoint = MAL_DOMAIN_V2 + MAL_GET_USER;

    let params = {
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        method:"get"
    };

    return fetch(endpoint, params).then((response) => {
        return response.json();
    }).then((data) => {
        var user = {
            id: data.id,
            name: data.name,
            picture: data.picture
        }

        return user;
    });
}


//https://api.myanimelist.net/v2/anime
function searchAnime(title, token){
    let body = new URLSearchParams();
    body.append("q", title);
    body.append("limit", 10);

    let endpoint = MAL_DOMAIN_V2 + MAL_GET_ANIME + "?" + body.toString();

    let params = {
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        method: "get"
    };

    return fetch(endpoint, params).then((response) => {
        return response.json();
    }).then((data) => {

        var result = [];

        data.data.forEach(element => {
            var current = element.node;
            var entry = {
                id: current.id,
                title: current.title,
                picture: current.main_picture.medium
            }
            result.push(entry);
        });

        return result;
    });
}

//https://api.myanimelist.net/v2/anime/{anime_id}/my_list_status
function addToList(token, anime, status, score){
    let body = new URLSearchParams();
    if(!isNull(status)){
        body.append("status", status);
    }
    if(!isNull(score)){
        body.append("score", score);
    }
    
    let endpoint = MAL_DOMAIN_V2 + MAL_PUT_ANIME + anime + "/my_list_status";

    let params = {
        headers:{
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + token
        },
        body: body,
        method: "put"
    };

    return fetch(endpoint, params).then((response) => {
        return response.json();
    }).then((data) => {
        var result = isNull(data.status);
        return result;
    });
}

export {authenticationURI, getToken, getUserInfo, searchAnime, addToList}