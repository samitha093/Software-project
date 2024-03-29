//node packages
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
import axios from 'axios';
import Swal from 'sweetalert2'
import classnames from 'classnames';
//Session and local storage data
import {gethost } from '../../session/Session';
//stylesheet
import styles from './styles.module.scss'


interface SidebarProps {
    id: string;
    data:any;
}

const Sidebar: React.FC<SidebarProps> = ({ id , data}) => {
    const router = useRouter()
    const [buyersidebar,setbuyersidebar] = React.useState([{status:true},{status:false},{status:false},{status:false}]);

    React.useEffect(() => {
       
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
        async function tabchange(id:any,data:any){
            data.change(id);
            var datapack = [
                {status:id=='1'?true:false},
                {status:id=='2'?true:false},
                {status:id=='3'?true:false},
                {status:id=='4'?true:false},
                {status:id=='5'?true:false}
            ]
            setbuyersidebar(datapack);  
        }

    return (
        <div className={styles.manager_c_sidebar}>
            <div className={styles.manager_c_sidebar_container}>

                    {/* <Tooltip title="Home Page" placement="bottom-end">
                        <div className={buyersidebar[0].status ? 'manager-c-sidebar-item active' : 'manager-c-sidebar-item'} onClick={()=>tabchange('1',data)}>
                            <Icon className={buyersidebar[0].status ? 'manager-c-sidebar-item-icon active' : 'manager-c-sidebar-item-icon'} path={mdiHomeOutline} />
                        </div>
                    </Tooltip> */}

                    <Tooltip title="Events" placement="bottom-end">
                        <div className={buyersidebar[1].status ? 'manager-c-sidebar-item active' : 'manager-c-sidebar-item'} onClick={()=>tabchange('2',data)}>
                            <Icon className={buyersidebar[1].status ? 'manager-c-sidebar-item-icon active' : 'manager-c-sidebar-item-icon'} path={mdiCalendarSearch} />
                        </div>
                    </Tooltip>

                    <Tooltip title="Sellers" placement="bottom-end">
                        <div className={buyersidebar[2].status ? 'manager-c-sidebar-item active' : 'manager-c-sidebar-item'} onClick={()=>tabchange('3',data)}>
                            <Icon className={buyersidebar[2].status ? 'manager-c-sidebar-item-icon active' : 'manager-c-sidebar-item-icon'} path={mdiAccountGroup} />
                        </div>
                    </Tooltip>

                    <Tooltip title="Manager Settings" placement="bottom-end">
                        <div className={buyersidebar[3].status ? 'manager-c-sidebar-item active' : 'manager-c-sidebar-item'} onClick={()=>tabchange('4',data)}>
                            <Icon className={buyersidebar[3].status ? 'manager-c-sidebar-item-icon active' : 'manager-c-sidebar-item-icon'} path={mdiCogs} />
                        </div>
                    </Tooltip>

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