//node packages
import React from 'react'
import {useRouter} from 'next/router'
import axios from 'axios';
import Swal from 'sweetalert2'
//Session and local storage data
import {gethost} from '../../session/Session';

interface AuthProps {
type:string;
}

const Auth: React.FC<AuthProps> = ({type, children}) => {

    const router = useRouter();

    const [open, setopen] = React.useState(false);

    React.useEffect(()=>{
        axios.get(gethost() + 'a/refreshtoken',{withCredentials:true}).then(async (res)=>{
            if(res.data.type == type){
              setopen(true);
            }else{
                if(res.data.type == 'BUYER'){
                    router.push('/buyer');
                }else if(res.data.type == 'MANAGER'){
                    router.push('/manager');
                }else if(res.data.type == 'SELLER'){
                    router.push('/seller');
                }else{
                  router.push('/user');
                }
            }
        }).catch((err)=>{
          router.push('/user');
        })       
    },[])
    return (
        <div>{open?children:null}</div>
    );
}

export default Auth;