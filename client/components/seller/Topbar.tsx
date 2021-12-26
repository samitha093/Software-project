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

const Topbar: React.FC<TopbarProps> = ({}) => {
        return (
            <div className="seller-c-topbar">
                    <div className="seller-c-topbar-container">
                        <Link href="/seller/Pendingevents">
                            <div className="seller-c-topbar-item">
                            Pending
                            </div>
                        </Link>

                        <Link href="/seller/Activeevents">
                            <div className="seller-c-topbar-item">
                            Active
                            </div>
                        </Link>

                        <Link href= "/seller/Endevents">
                            <div className="seller-c-topbar-item">
                            End
                            </div>
                        </Link>

                        <Link href="/seller/Declinedevents">
                        <div className="seller-c-topbar-item">
                            Declined
                        </div>
                        </Link>
                    </div>
            </div>
        );
}

export default Topbar;