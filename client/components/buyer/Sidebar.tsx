//node packages
import React from 'react'
import Icon from '@mdi/react';
import { mdiHomeOutline } from '@mdi/js';
import { mdiCreditCardMarkerOutline } from '@mdi/js';
import { mdiCameraTimer } from '@mdi/js';
import { mdiTicketPercentOutline } from '@mdi/js';
import { mdiCogs } from '@mdi/js';
import { mdiLogout } from '@mdi/js';
import {useRouter} from 'next/router';
import axios from 'axios';
import Swal from 'sweetalert2'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
//stylesheet
import styles from './styles.module.scss'
//Session and local storage data
import {gethost } from '../../session/Session';

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
    const router = useRouter()

    const [buyersidebar,setbuyersidebar] = React.useState([{status:true},{status:false},{status:false},{status:false},{status:false}]);

    React.useEffect(() => {

    },[]);

    async function tabchange(id:any,data:any){
        data.change(id);
        var datapack = [
            {status:id=='1'?true:false},
            {status:id=='2'?true:false},
            {status:id=='3'?true:false},
            {status:id=='4'?true:false},
            {status:id=='5'?true:false}
        ]
        setbuyersidebar(datapack);  
    }

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


        return (
            <div className={styles.buyer_c_sidebar}>
                    <div className={styles.buyer_c_sidebar_container}>

                        <BootstrapTooltip title="My Tickets">
                            <div className={buyersidebar[0].status ? 'buyer-c-sidebar-item active' : 'buyer-c-sidebar-item'} onClick={()=>tabchange('1',data)} id={'myTickets'}>
                                <Icon path={mdiHomeOutline} className={buyersidebar[0].status ? 'buyer-c-sidebar-item-icon active' : 'buyer-c-sidebar-item-icon'}/>
                            </div>
                        </BootstrapTooltip>

                        <BootstrapTooltip title="Pending Payment Tickets">
                            <div className={buyersidebar[1].status ? 'buyer-c-sidebar-item active' : 'buyer-c-sidebar-item'} onClick={()=>tabchange('2',data)} id={'pendingTickets'}>
                                <Icon className={buyersidebar[1].status ? 'buyer-c-sidebar-item-icon active' : 'buyer-c-sidebar-item-icon'} path={mdiCreditCardMarkerOutline} />
                            </div>
                            </BootstrapTooltip>

                        <BootstrapTooltip title="Pending Bids">
                            <div className={buyersidebar[2].status ? 'buyer-c-sidebar-item active' : 'buyer-c-sidebar-item'} onClick={()=>tabchange('3',data)} id={'pendingBids'}>
                                <Icon path={mdiCameraTimer} className={buyersidebar[2].status ? 'buyer-c-sidebar-item-icon active' : 'buyer-c-sidebar-item-icon'}/>
                            </div>
                            </BootstrapTooltip>

                        <BootstrapTooltip title="My Old Tickets">
                            <div className={buyersidebar[3].status ? 'buyer-c-sidebar-item active' : 'buyer-c-sidebar-item'} onClick={()=>tabchange('4',data)} id={'oldTickets'} >
                                <Icon path={ mdiTicketPercentOutline} className={buyersidebar[3].status ? 'buyer-c-sidebar-item-icon active' : 'buyer-c-sidebar-item-icon'}/>
                            </div>
                            </BootstrapTooltip>

                        <BootstrapTooltip title="Change User information">
                            <div className={buyersidebar[4].status ? 'buyer-c-sidebar-item active' : 'buyer-c-sidebar-item'} onClick={()=>tabchange('5',data)}>
                                <Icon path={mdiCogs} className={buyersidebar[4].status ? 'buyer-c-sidebar-item-icon active' : 'buyer-c-sidebar-item-icon'}/>
                            </div>
                            </BootstrapTooltip>

                        <BootstrapTooltip title="Logout">
                        <div onClick={logout} className="buyer-c-sidebar-item">
                            <Icon path={mdiLogout} className="buyer-c-sidebar-item-icon"/>
                        </div>
                        </BootstrapTooltip>
                    </div>
            </div>
        );
}

export default Sidebar; 