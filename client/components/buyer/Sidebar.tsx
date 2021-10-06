import React from 'react'
import Link from 'next/link'
import Icon from '@mdi/react';
import { mdiHomeOutline } from '@mdi/js';
import { mdiCreditCardMarkerOutline } from '@mdi/js';
import { mdiCameraTimer } from '@mdi/js';
import { mdiTicketPercentOutline } from '@mdi/js';
import { mdiCogs } from '@mdi/js';
import { mdiLogout } from '@mdi/js';
interface SidebarProps {

}

const Sidebar: React.FC<SidebarProps> = ({}) => {
        return (
            <div className="buyer-c-sidebar">
                    <div className="buyer-c-sidebar-container">
                        <Link href="/buyer">
                            <div className="buyer-c-sidebar-item">
                                <Icon path={mdiHomeOutline} color='white'/>
                            </div>
                        </Link>
                        <Link href="/buyer/payment">
                            <div className="buyer-c-sidebar-item">
                                <Icon path={mdiCreditCardMarkerOutline} color='white'/>
                            </div>
                        </Link>
                        <Link href="/buyer/bids">
                            <div className="buyer-c-sidebar-item">
                                <Icon path={mdiCameraTimer} color='white'/>
                            </div>
                        </Link>
                        <Link href="/buyer/tickets">
                            <div className="buyer-c-sidebar-item">
                                <Icon path={ mdiTicketPercentOutline} color='white'/>
                            </div>
                        </Link>
                        <Link href="/buyer/settings">
                            <div className="buyer-c-sidebar-item">
                                <Icon path={mdiCogs} color='white'/>
                            </div>
                        </Link>
                        <div className="buyer-c-sidebar-item">
                            <Icon path={mdiLogout} color='white'/>
                        </div>
                    </div>
            </div>
        );
}

export default Sidebar;