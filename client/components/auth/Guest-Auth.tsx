import React from 'react'
import {useRouter} from 'next/router'
import axios from 'axios';
import Swal from 'sweetalert2'
//Session and local storage data
import {gethost} from '../../session/Session';


interface GuestAuthProps {

    }
    
    const GuestAuth: React.FC<GuestAuthProps> = ({children}) => {
    
        const router = useRouter();
    
        const [open, setopen] = React.useState(false);
    
        React.useEffect(()=>{
            








        },[])
        return (
            <div>{children}</div>
        );
    }
    
    export default GuestAuth;