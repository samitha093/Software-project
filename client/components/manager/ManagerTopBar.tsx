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

interface TopbarProps {

}

const ManagerTopBar: React.FC<TopbarProps> = ({}) => {
        return (
            <div className="manager-c-topbar">
                    <div className="manager-c-topbar-container">
                        <Link href="/manager/pendingevents">
                            <div className="manager-c-topbar-item">
                            Pending
                            </div>
                        </Link>

                        <Link href="/manager/activeevents">
                            <div className="manager-c-topbar-item">
                            Active
                            </div>
                        </Link>

                        <Link href="/manager/declinedevents">
                        <div className="manager-c-topbar-item">
                            Declined
                        </div>
                        </Link>
                    </div>
            </div>
        );
}

export default ManagerTopBar;