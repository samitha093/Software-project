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
  id2 : string;
}


const Topbar: React.FC<TopbarProps> = ({id2}) => {
const [sellertopbar1,setsellertopbar1] = React.useState(true);
const [sellertopbar2,setsellertopbar2] = React.useState(false);
const [sellertopbar3,setsellertopbar3] = React.useState(false);
const [sellertopbar4,setsellertopbar4] = React.useState(false);
    React.useEffect(() => {
        if(id2 == "1"){
            setsellertopbar1(true);  
            setsellertopbar2(false);
            setsellertopbar3(false);
            setsellertopbar4(false);
        }else if(id2 == "2"){
            setsellertopbar1(false);  
            setsellertopbar2(true);
            setsellertopbar3(false);
            setsellertopbar4(false);
        }else if(id2 == "3"){
            setsellertopbar1(false);  
            setsellertopbar2(false);
            setsellertopbar3(true);
            setsellertopbar4(false);
        }else if(id2 == "4"){
            setsellertopbar1(false);  
            setsellertopbar2(false);
            setsellertopbar3(false);
            setsellertopbar4(true);
        }     
    },[]);
        return (
            <div className="seller-c-topbar">
                    <div className="seller-c-topbar-container">
                        <Link href="/seller/Pendingevents">
                            <div className={sellertopbar1 ? 'seller-c-topbar-item active' : 'seller-c-topbar-item'}>
                            Pending
                            </div>
                        </Link>

                        <Link href="/seller/Activeevents">
                            <div className={sellertopbar2 ? 'seller-c-topbar-item active' : 'seller-c-topbar-item'}>
                            Active
                            </div>
                        </Link>

                        <Link href= "/seller/Endevents">
                            <div className={sellertopbar3 ? 'seller-c-topbar-item active' : 'seller-c-topbar-item'}>
                            End
                            </div>
                        </Link>

                        <Link href="/seller/Declinedevents">
                        <div className={sellertopbar4 ? 'seller-c-topbar-item active' : 'seller-c-topbar-item'}>
                            Declined
                        </div>
                        </Link>
                    </div>
            </div>
        );
}

export default Topbar;