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
import Styles from './Styles.module.css'

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
const [sellersidebar1,setsellersidebar1] = React.useState(true);
const [sellersidebar2,setsellersidebar2] = React.useState(false);
const [sellersidebar3,setsellersidebar3] = React.useState(false);
    React.useEffect(() => {
        if(id == "1"){
            setsellersidebar1(true);  
            setsellersidebar2(false);
            setsellersidebar3(false);
        }else if(id == "2"){
            setsellersidebar1(false);  
            setsellersidebar2(true);
            setsellersidebar3(false);
        }else if(id == "3"){
            setsellersidebar1(false);  
            setsellersidebar2(false);
            setsellersidebar3(true);
        }
    },[]);
    
        return (
            <div className={Styles.seller_c_sidebar}>
                    <div className={Styles.seller_c_sidebar_container}>
                        <Link href="/seller">
                            <div className={sellersidebar1 ? 'seller_c_sidebar_item active' : 'seller_c_sidebar_item'}>
                            <BootstrapTooltip title="Home Page">
                                <Icon className={sellersidebar1 ? 'seller_c_sidebar_item_icon active' : 'seller_c_sidebar_item_icon'} path={mdiHomeOutline}/>
                                </BootstrapTooltip>
                            </div>
                        </Link>

                        <Link href="/seller/Pendingevents">
                            <div className={sellersidebar2 ? 'seller_c_sidebar_item active' : 'seller_c_sidebar_item'}>
                            <BootstrapTooltip title="Events">
                                <Icon className={sellersidebar2 ? 'seller_c_sidebar_item_icon active' : 'seller_c_sidebar_item_icon'} path={mdiCalendarSearch}/>
                                </BootstrapTooltip>
                            </div>
                        </Link>

                        <Link href= "/seller/Settings">
                        <div className={sellersidebar3 ? 'seller_c_sidebar_item active' : 'seller_c_sidebar_item'}>
                        <BootstrapTooltip title="Change Password">
                            <Icon className={sellersidebar3 ? 'seller_c_sidebar_item_icon active' : 'seller_c_sidebar_item_icon'} path={mdiCogs}/>
                            </BootstrapTooltip>
                        </div>
                        </Link>

                        <Link href="/">
                        <div className={Styles.seller_c_sidebar_item}>
                        <BootstrapTooltip title="Logout">
                            <Icon className={Styles.seller_c_sidebar_item_icon} path={mdiLogout}/>
                            </BootstrapTooltip>
                        </div>
                        </Link>
                    </div>
            </div>
        );
}

export default Sidebar;