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
}
const Sidebar: React.FC<SidebarProps> = ({id}) => {
    const router = useRouter();
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