import React from 'react'
import Link from 'next/link'
import Icon from '@mdi/react';
import { mdiHomeOutline } from '@mdi/js';
import { mdiCalendarSearch } from '@mdi/js';
import {gethost } from '../../session/Session';
import { mdiCogs } from '@mdi/js';
import { mdiLogout } from '@mdi/js';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Styles from './Styles.module.css'
import Swal from 'sweetalert2'
import {useRouter} from 'next/router';
import axios from 'axios';

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

interface SidebarProps {
    id : string;
    data:any;
}
const Sidebar: React.FC<SidebarProps> = ({id,data}) => {
    const router = useRouter();
    const [buyersidebar,setbuyersidebar] = React.useState([{status:true},{status:false},{status:false}]);

    React.useEffect(() => {
       
    },[]);

    async function logout(){
        axios.get(gethost() + 'a/refreshtoken',{withCredentials:true})
        .then(async (res)=>{
            const config = {
                headers: { Authorization: `Bearer ${res.data.accesstoken}` }
            };
            const bodyParameters = {};
            axios.post(gethost() + 'a/logout',bodyParameters,config)
            .then(async (res2)=>{
                router.push('/user');
            })
            .catch((err)=>{
                Swal.fire({
                icon: 'error',
                title: 'Authentication Failed',
                text: 'Please Login to your account',
                showConfirmButton: false,
                timer: 2500
                })
            })
        })
        .catch((err)=>{
            Swal.fire({
            icon: 'error',
            title: 'Authentication Failed',
            text: 'Please Login to your account',
            showConfirmButton: false,
            timer: 2500
            })
            router.push('/user');
        })
    }
    
    async function tabchange(id:any,data:any){
        data.change(id);
        var datapack = [
            {status:id=='1'?true:false},
            {status:id=='2'?true:false},
            {status:id=='3'?true:false},
        ]
        setbuyersidebar(datapack);  
    }

    return (
        <div className={Styles.seller_c_sidebar}>
                <div className={Styles.seller_c_sidebar_container}>

                    <div className={buyersidebar[0].status ? 'seller_c_sidebar_item active' : 'seller_c_sidebar_item'} onClick={()=>tabchange('1',data)}>
                    <BootstrapTooltip title="Home Page">
                        <Icon className={buyersidebar[0].status ? 'seller_c_sidebar_item_icon active' : 'seller_c_sidebar_item_icon'} path={mdiHomeOutline}/>
                        </BootstrapTooltip>
                    </div>

                    <div className={buyersidebar[1].status ? 'seller_c_sidebar_item active' : 'seller_c_sidebar_item'} onClick={()=>tabchange('2',data)}>
                    <BootstrapTooltip title="Events">
                        <Icon className={buyersidebar[1].status ? 'seller_c_sidebar_item_icon active' : 'seller_c_sidebar_item_icon'} path={mdiCalendarSearch}/>
                        </BootstrapTooltip>
                    </div>

                    <div className={buyersidebar[2].status ? 'seller_c_sidebar_item active' : 'seller_c_sidebar_item'} onClick={()=>tabchange('3',data)}>
                    <BootstrapTooltip title="Change Password">
                        <Icon className={buyersidebar[2].status ? 'seller_c_sidebar_item_icon active' : 'seller_c_sidebar_item_icon'} path={mdiCogs}/>
                        </BootstrapTooltip>
                    </div>

                    <div onClick={logout} className={Styles.seller_c_sidebar_item}>
                    <BootstrapTooltip title="Logout">
                        <Icon className={Styles.seller_c_sidebar_item_icon} path={mdiLogout}/>
                        </BootstrapTooltip>
                    </div>
                </div>
        </div>
    );
}

export default Sidebar;