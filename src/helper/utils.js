import crypto from 'crypto';

function isNull(variable){
    return variable === "undefined" || variable === "null" 
    || variable === "" || typeof variable === "undefined"
    || variable === undefined || variable === null;
}

function base64URLEncode(str) {
    return str.toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}

function generateCodeVerifier(){
    return base64URLEncode(crypto.randomBytes(32));
 }
 
 function generateCodeChallenge(verifier){
     return base64URLEncode(verifier);
 }


export {isNull, generateCodeVerifier, generateCodeChallenge}