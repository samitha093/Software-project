import React from 'react'
import Link from 'next/link'
import Icon from '@mdi/react';
import { mdiHomeOutline } from '@mdi/js';
import { mdiCalendarSearch } from '@mdi/js';
import { mdiCogs } from '@mdi/js';
import { mdiLogout } from '@mdi/js';
import { mdiAccountGroup } from '@mdi/js';
import Tooltip from '@mui/material/Tooltip';
import { useRouter } from 'next/router';
import {gethost } from '../../session/Session';
import axios from 'axios';
import Swal from 'sweetalert2'

import styles from './styles.module.css'
import classnames from 'classnames';

interface SidebarProps {
    id: string;
}

const Sidebar: React.FC<SidebarProps> = ({ id }) => {
    const router = useRouter()
    const [managersellersidebar1, setmanagersellersidebar1] = React.useState(true);
    const [managersellersidebar2, setmanagersellersidebar2] = React.useState(false);
    const [managersellersidebar3, setmanagersellersidebar3] = React.useState(false);
    const [managersellersidebar4, setmanagersellersidebar4] = React.useState(false);
    React.useEffect(() => {
        if (id == "1") {
            setmanagersellersidebar1(true);
            setmanagersellersidebar2(false);
            setmanagersellersidebar3(false);
            setmanagersellersidebar4(false);
        } else if (id == "2") {
            setmanagersellersidebar1(false);
            setmanagersellersidebar2(true);
            setmanagersellersidebar3(false);
            setmanagersellersidebar4(false);
        } else if (id == "3") {
            setmanagersellersidebar1(false);
            setmanagersellersidebar2(false);
            setmanagersellersidebar3(true);
            setmanagersellersidebar4(false);
        } else if (id == "4") {
            setmanagersellersidebar1(false);
            setmanagersellersidebar2(false);
            setmanagersellersidebar3(false);
            setmanagersellersidebar4(true);
        }
    }, []);
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
        <div className={styles.manager_c_sidebar}>
            <div className={styles.manager_c_sidebar_container}>
                <Link href="/manager">
                    <Tooltip title="Home Page" placement="bottom-end">
                        <div className={managersellersidebar1 ? 'manager-c-sidebar-item active' : 'manager-c-sidebar-item'}>
                            <Icon className={managersellersidebar1 ? 'manager-c-sidebar-item-icon active' : 'manager-c-sidebar-item-icon'} path={mdiHomeOutline} />
                        </div>
                    </Tooltip>
                </Link>

                <Link href="/manager/pendingevents">
                    <Tooltip title="Events" placement="bottom-end">
                        <div className={managersellersidebar2 ? 'manager-c-sidebar-item active' : 'manager-c-sidebar-item'}>
                            <Icon className={managersellersidebar2 ? 'manager-c-sidebar-item-icon active' : 'manager-c-sidebar-item-icon'} path={mdiCalendarSearch} />
                        </div>
                    </Tooltip>
                </Link>

                <Link href="/manager/sellers">
                    <Tooltip title="Sellers" placement="bottom-end">
                        <div className={managersellersidebar3 ? 'manager-c-sidebar-item active' : 'manager-c-sidebar-item'}>
                            <Icon className={managersellersidebar3 ? 'manager-c-sidebar-item-icon active' : 'manager-c-sidebar-item-icon'} path={mdiAccountGroup} />
                        </div>
                    </Tooltip>
                </Link>


                <Link href="/manager/settings">
                    <Tooltip title="Manager Settings" placement="bottom-end">
                        <div className={managersellersidebar4 ? 'manager-c-sidebar-item active' : 'manager-c-sidebar-item'}>
                            <Icon className={managersellersidebar4 ? 'manager-c-sidebar-item-icon active' : 'manager-c-sidebar-item-icon'} path={mdiCogs} />
                        </div>
                    </Tooltip>
                </Link>

                <Tooltip title="Logout from Manager" placement="bottom-end">
                    <div onClick={logout} className="manager-c-sidebar-item">
                        <Icon className="manager-c-sidebar-item-icon" path={mdiLogout} />
                    </div>
                </Tooltip>
            </div>
        </div>
    );
}

export default Sidebar;