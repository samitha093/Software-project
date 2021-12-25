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
                            <BootstrapTooltip title="My Tickets">
                                <div className="buyer-c-sidebar-item">
                                    <Icon path={mdiHomeOutline} className="buyer-c-sidebar-item-icon"/>
                                </div>
                            </BootstrapTooltip>
                        </Link>
                        <Link href="/buyer/payment">
                        <BootstrapTooltip title="Pending Payment Tickets">
                            <div className="buyer-c-sidebar-item">
                                <Icon className="buyer-c-sidebar-item-icon" path={mdiCreditCardMarkerOutline} />
                            </div>
                            </BootstrapTooltip>
                        </Link>
                        <Link href="/buyer/bids">
                        <BootstrapTooltip title="Pending Bids">
                            <div className="buyer-c-sidebar-item">
                                <Icon path={mdiCameraTimer} className="buyer-c-sidebar-item-icon"/>
                            </div>
                            </BootstrapTooltip>
                        </Link>
                        <Link href="/buyer/tickets">
                        <BootstrapTooltip title="My Old Tickets">
                            <div className="buyer-c-sidebar-item">
                                <Icon path={ mdiTicketPercentOutline} className="buyer-c-sidebar-item-icon"/>
                            </div>
                            </BootstrapTooltip>
                        </Link>
                        <Link href="/buyer/settings">
                        <BootstrapTooltip title="Change User information">
                            <div className="buyer-c-sidebar-item">
                                <Icon path={mdiCogs} className="buyer-c-sidebar-item-icon"/>
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