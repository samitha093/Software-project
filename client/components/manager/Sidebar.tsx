import React from 'react'
import Link from 'next/link'
import Icon from '@mdi/react';
//import { mdiHomeOutline } from '@mdi/js';
import { mdiLanPending  } from '@mdi/js';
//import { mdiCheckDecagramOutline } from '@mdi/js';
import { mdiCheckboxMultipleOutline } from '@mdi/js';
import { mdiCloseBoxMultipleOutline  } from '@mdi/js';
import { mdiCogs } from '@mdi/js';
import { mdiLogout } from '@mdi/js';
interface SidebarProps {

}

const Sidebar: React.FC<SidebarProps> = ({}) => {
        return (
            <div className="manager-c-sidebar">
                    <div className="manager-c-sidebar-container">
                        <Link href="/manager">
                            <div className="manager-c-sidebar-item">
                                <Icon path={mdiLanPending} color='white'/>
                            </div>
                        </Link>

                        <Link href="/manager/activeevents">
                            <div className="manager-c-sidebar-item">
                                <Icon path={mdiCheckboxMultipleOutline} color='white'/>
                            </div>
                        </Link>

                        <Link href="/manager/declinedevents">
                            <div className="manager-c-sidebar-item">
                                <Icon path={mdiCloseBoxMultipleOutline } color='white'/>
                            </div>
                        </Link>

                        <Link href="/manager/settings">
                            <div className="manager-c-sidebar-item">
                                <Icon path={mdiCogs} color='white'/>
                            </div>
                        </Link>
                        <Link href= "/">
                        <div className="manager-c-sidebar-item">
                            <Icon path={mdiLogout} color='white'/>
                        </div>
                        </Link>
                    </div>
            </div>
        );
}

export default Sidebar;