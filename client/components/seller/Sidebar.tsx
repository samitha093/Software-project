import React from 'react'
import Link from 'next/link'
import Icon from '@mdi/react';
import { mdiHomeOutline } from '@mdi/js';
import { mdiCalendarSearch } from '@mdi/js';
import { mdiCalendarClock } from '@mdi/js';
import { mdiCalendarCheck } from '@mdi/js';
import { mdiCalendarRemove } from '@mdi/js';
import { mdiCogs } from '@mdi/js';
import { mdiLogout } from '@mdi/js';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

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
        return (
            <div className="seller-c-sidebar">
                    <div className="seller-c-sidebar-container">
                        <Link href="/seller">
                            <div className="seller-c-sidebar-item">
                            <BootstrapTooltip title="Home Page">
                                <Icon className="seller-c-sidebar-item-icon" path={mdiHomeOutline}/>
                                </BootstrapTooltip>
                            </div>
                        </Link>

                        <Link href="/seller/Pendingevents">
                            <div className="seller-c-sidebar-item">
                            <BootstrapTooltip title="Events">
                                <Icon className="seller-c-sidebar-item-icon" path={mdiCalendarSearch}/>
                                </BootstrapTooltip>
                            </div>
                        </Link>

                        <Link href= "/seller/Settings">
                        <div className="seller-c-sidebar-item">
                        <BootstrapTooltip title="Change Password">
                            <Icon className="seller-c-sidebar-item-icon" path={mdiCogs}/>
                            </BootstrapTooltip>
                        </div>
                        </Link>

                        <Link href="/">
                        <div className="seller-c-sidebar-item">
                        <BootstrapTooltip title="Logout">
                            <Icon className="seller-c-sidebar-item-icon" path={mdiLogout}/>
                            </BootstrapTooltip>
                        </div>
                        </Link>
                    </div>
            </div>
        );
}

export default Sidebar;