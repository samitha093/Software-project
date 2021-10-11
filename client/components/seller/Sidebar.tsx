import React from 'react'
import Link from 'next/link'
import Icon from '@mdi/react';
import { mdiLanPending  } from '@mdi/js';
import { mdiCheckboxMultipleOutline } from '@mdi/js';
import { mdiCloseBoxMultipleOutline  } from '@mdi/js';
import { mdiCogs } from '@mdi/js';
import { mdiLogout } from '@mdi/js';
interface SidebarProps {

}

const Sidebar: React.FC<SidebarProps> = ({}) => {
        return (
            <div className="seller-c-sidebar">
                    <div className="seller-c-sidebar-container">
                        <Link href="/seller">
                            <div className="seller-c-sidebar-item">
                                <Icon path={mdiLanPending} color='white'/>
                            </div>
                        </Link>

                        <Link href="/seller/activeevents">
                            <div className="seller-c-sidebar-item">
                                <Icon path={mdiCheckboxMultipleOutline} color='white'/>
                            </div>
                        </Link>

                        <Link href="/seller/declinedevents">
                            <div className="seller-c-sidebar-item">
                                <Icon path={mdiCloseBoxMultipleOutline } color='white'/>
                            </div>
                        </Link>

                        <Link href="/seller/settings">
                            <div className="seller-c-sidebar-item">
                                <Icon path={mdiCogs} color='white'/>
                            </div>
                        </Link>
                        <Link href= "/">
                        <div className="seller-c-sidebar-item">
                            <Icon path={mdiLogout} color='white'/>
                        </div>
                        </Link>
                    </div>
            </div>
        );
}

export default Sidebar;