import React from 'react'
import Link from 'next/link'
import Icon from '@mdi/react';
import { mdiHomeOutline } from '@mdi/js';
import { mdiCreditCardMarkerOutline } from '@mdi/js';
import { mdiCameraTimer } from '@mdi/js';
import { mdiTicketPercentOutline } from '@mdi/js';
import { mdiCogs } from '@mdi/js';
import { mdiLogout } from '@mdi/js';
import Tooltip from '@mui/material/Tooltip';
import {endsession} from '../../session/Session';
import {useRouter} from 'next/router';
interface SidebarProps {

}

const Sidebar: React.FC<SidebarProps> = ({}) => {
const router = useRouter()

    async function logout(){
        endsession();
        router.push('/user');
    }
        return (
            <div className="buyer-c-sidebar">
                    <div className="buyer-c-sidebar-container">
                        <Link href="/buyer">
                            <Tooltip title="My Tickets" followCursor>
                                <div className="buyer-c-sidebar-item">
                                    <Icon path={mdiHomeOutline} color='white'/>
                                </div>
                            </Tooltip>
                        </Link>
                        <Link href="/buyer/payment">
                        <Tooltip title="Pending Payment Tickets" followCursor>
                            <div className="buyer-c-sidebar-item">
                                <Icon path={mdiCreditCardMarkerOutline} color='white'/>
                            </div>
                            </Tooltip>
                        </Link>
                        <Link href="/buyer/bids">
                        <Tooltip title="Pending Bids" followCursor>
                            <div className="buyer-c-sidebar-item">
                                <Icon path={mdiCameraTimer} color='white'/>
                            </div>
                            </Tooltip>
                        </Link>
                        <Link href="/buyer/tickets">
                        <Tooltip title="My Old Tickets" followCursor>
                            <div className="buyer-c-sidebar-item">
                                <Icon path={ mdiTicketPercentOutline} color='white'/>
                            </div>
                            </Tooltip>
                        </Link>
                        <Link href="/buyer/settings">
                        <Tooltip title="Change User information" followCursor>
                            <div className="buyer-c-sidebar-item">
                                <Icon path={mdiCogs} color='white'/>
                            </div>
                            </Tooltip>
                        </Link>
                        <Tooltip title="Logout" followCursor>
                        <div onClick={logout} className="buyer-c-sidebar-item">
                            <Icon path={mdiLogout} color='white'/>
                        </div>
                        </Tooltip>
                    </div>
            </div>
        );
}

export default Sidebar; 