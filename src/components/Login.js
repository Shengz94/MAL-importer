import {authenticationURI} from "../helper/malAPI";
import {isNull, generateCodeVerifier, generateCodeChallenge} from "../helper/utils";
import { Button } from "@material-ui/core";
import { withRouter} from "react-router-dom";

const Login = (props) => {

    function goToAutheticationPage(){
        let codeVerifier = generateCodeVerifier();
        let codeChallenge = generateCodeChallenge(codeVerifier);
        localStorage.setItem("codeVerifier", codeVerifier);
        window.location.href = authenticationURI(codeChallenge);
    }

    if(!isNull(props.userToken)){
        props.history.push("/Home");
    }

    return (
        <div className="login-view">
            <Button size="large" variant="contained" onClick={goToAutheticationPage}>Log in</Button>
        </div>
    );
};

export default withRouter(Login);