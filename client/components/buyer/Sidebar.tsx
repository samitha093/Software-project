import React from 'react'
import Link from 'next/link'
import Icon from '@mdi/react';
import { mdiHomeOutline } from '@mdi/js';
import { mdiCreditCardMarkerOutline } from '@mdi/js';
import { mdiCameraTimer } from '@mdi/js';
import { mdiTicketPercentOutline } from '@mdi/js';
import { mdiCogs } from '@mdi/js';
import { mdiLogout } from '@mdi/js';
import {endsession} from '../../session/Session';
import {useRouter} from 'next/router';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

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
}

const Sidebar: React.FC<SidebarProps> = ({id}) => {
const router = useRouter()
const [buyersidebar1,setbuyersidebar1] = React.useState(true);
const [buyersidebar2,setbuyersidebar2] = React.useState(false);
const [buyersidebar3,setbuyersidebar3] = React.useState(false);
const [buyersidebar4,setbuyersidebar4] = React.useState(false);
const [buyersidebar5,setbuyersidebar5] = React.useState(false);
React.useEffect(() => {
    if(id == "1"){
        setbuyersidebar1(true);  
        setbuyersidebar2(false);
        setbuyersidebar3(false);
        setbuyersidebar4(false);
        setbuyersidebar5(false);
    }else if(id == "2"){
        setbuyersidebar1(false);  
        setbuyersidebar2(true);
        setbuyersidebar3(false);
        setbuyersidebar4(false);
        setbuyersidebar5(false);
    }else if(id == "3"){
        setbuyersidebar1(false);  
        setbuyersidebar2(false);
        setbuyersidebar3(true);
        setbuyersidebar4(false);
        setbuyersidebar5(false);
    }else if(id == "4"){
        setbuyersidebar1(false);  
        setbuyersidebar2(false);
        setbuyersidebar3(false);
        setbuyersidebar4(true);
        setbuyersidebar5(false);
    }else if(id == "5"){
        setbuyersidebar1(false);  
        setbuyersidebar2(false);
        setbuyersidebar3(false);
        setbuyersidebar4(false);
        setbuyersidebar5(true);
    }
},[]);
    async function logout(){
        endsession();
        router.push('/user');
    }
        return (
            <div className="buyer-c-sidebar">
                    <div className="buyer-c-sidebar-container">
                        <Link href="/buyer">
                            <BootstrapTooltip title="My Tickets">
                                <div className={buyersidebar1 ? 'buyer-c-sidebar-item active' : 'buyer-c-sidebar-item'}>
                                    <Icon path={mdiHomeOutline} className={buyersidebar1 ? 'buyer-c-sidebar-item-icon active' : 'buyer-c-sidebar-item-icon'}/>
                                </div>
                            </BootstrapTooltip>
                        </Link>
                        <Link href="/buyer/payment">
                        <BootstrapTooltip title="Pending Payment Tickets">
                            <div className={buyersidebar2 ? 'buyer-c-sidebar-item active' : 'buyer-c-sidebar-item'}>
                                <Icon className={buyersidebar2 ? 'buyer-c-sidebar-item-icon active' : 'buyer-c-sidebar-item-icon'} path={mdiCreditCardMarkerOutline} />
                            </div>
                            </BootstrapTooltip>
                        </Link>
                        <Link href="/buyer/bids">
                        <BootstrapTooltip title="Pending Bids">
                            <div className={buyersidebar3 ? 'buyer-c-sidebar-item active' : 'buyer-c-sidebar-item'}>
                                <Icon path={mdiCameraTimer} className={buyersidebar3 ? 'buyer-c-sidebar-item-icon active' : 'buyer-c-sidebar-item-icon'}/>
                            </div>
                            </BootstrapTooltip>
                        </Link>
                        <Link href="/buyer/tickets">
                        <BootstrapTooltip title="My Old Tickets">
                            <div className={buyersidebar4 ? 'buyer-c-sidebar-item active' : 'buyer-c-sidebar-item'}>
                                <Icon path={ mdiTicketPercentOutline} className={buyersidebar4 ? 'buyer-c-sidebar-item-icon active' : 'buyer-c-sidebar-item-icon'}/>
                            </div>
                            </BootstrapTooltip>
                        </Link>
                        <Link href="/buyer/settings">
                        <BootstrapTooltip title="Change User information">
                            <div className={buyersidebar5 ? 'buyer-c-sidebar-item active' : 'buyer-c-sidebar-item'}>
                                <Icon path={mdiCogs} className={buyersidebar5 ? 'buyer-c-sidebar-item-icon active' : 'buyer-c-sidebar-item-icon'}/>
                            </div>
                            </BootstrapTooltip>
                        </Link>
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