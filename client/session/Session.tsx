import React, { useState } from 'react';

const [token,setToken] = React.useState<string>("");
const [type,setType] = React.useState<string>("");
const [Session,setSession] = React.useState<boolean>(false);

export const startsession = (token: string, usertype: string) =>{
    setToken(token);
    setType(usertype);
    if(token === ""){
        setSession(false);
    }else{
        setSession(true);
    }
}

export const endsession = ()=>{
    setSession(false);
    //should be delete refresh token aswell
}

export const gettoken = () =>{
    if(Session){
        return token;
    }else{
        return null;
    }
}
export const getuser = () =>{
    if(Session){
        return type;
    }else{
        return null;
    }
}
export const gethost = () =>{
    const host = 'http://localhost:8000/';
    return host;
}