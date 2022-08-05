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
            }
        }).catch((err)=>{
          Swal.fire({
            icon: 'error',
            title: 'Authentication Failed',
            text: err,
            showConfirmButton: false,
            timer: 2500
          })
          router.push('/user');
        })       
    },[])
    return (
        <div>{open?children:null}</div>
    );
}

export default Auth;