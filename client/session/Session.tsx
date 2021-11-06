export const startsession = (token: string, usertype: string) =>{
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("usertype", usertype);
}

export const endsession = ()=>{
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("usertype");
}

export const gettoken = () =>{
    const token = sessionStorage.getItem("token");
    if(token){
        return token;
    }else{
        return null;
    }
}
export const getuser = () =>{
    const user = sessionStorage.getItem("usertype");
    if(user){
        return user;
    }else{
        return null;
    }
}
export const gethost = () =>{
    const host = 'http://localhost:8000/';
    return host;
}