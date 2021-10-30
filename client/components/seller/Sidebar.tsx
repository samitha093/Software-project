import React from 'react'
import Link from 'next/link'
import Icon from '@mdi/react';
import { mdiHomeOutline } from '@mdi/js';
import { mdiCalendarSearch } from '@mdi/js';
import { mdiCalendarClock } from '@mdi/js';
import { mdiCalendarCheck } from '@mdi/js';
import { mdiCalendarRemove } from '@mdi/js';
interface SidebarProps {

}

const Sidebar: React.FC<SidebarProps> = ({}) => {
        return (
            <div className="manager-c-sidebar">
                    <div className="manager-c-sidebar-container">
                        <Link href="/seller/homepage">
                            <div className="manager-c-sidebar-item">
                                <Icon path={mdiHomeOutline} color='white'/>
                            </div>
                        </Link>

                        <Link href="/seller/Pendingevents">
                            <div className="manager-c-sidebar-item">
                                <Icon path={mdiCalendarSearch} color='white'/>
                            </div>
                        </Link>

                        <Link href="/seller/Activeevents">
                            <div className="manager-c-sidebar-item">
                                <Icon path={mdiCalendarClock} color='white'/>
                            </div>
                        </Link>

                        <Link href="/seller/Endevents">
                            <div className="manager-c-sidebar-item">
                                <Icon path={mdiCalendarCheck} color='white'/>
                            </div>
                        </Link>
                        <Link href= "/seller/declined">
                        <div className="manager-c-sidebar-item">
                            <Icon path={mdiCalendarRemove} color='white'/>
                        </div>
                        </Link>
                    </div>
            </div>
        );
}

export default Sidebar;