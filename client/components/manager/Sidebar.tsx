import React from 'react'
import Link from 'next/link'
import Icon from '@mdi/react';
import { mdiLanPending } from '@mdi/js';
import { mdiCheckboxMultipleOutline } from '@mdi/js';
import { mdiCloseBoxMultipleOutline } from '@mdi/js';
import { mdiCogs } from '@mdi/js';
import { mdiLogout } from '@mdi/js';
import Tooltip from '@mui/material/Tooltip';

interface SidebarProps {

}

const Sidebar: React.FC<SidebarProps> = ({ }) => {
    return (
        <div className="manager-c-sidebar">
            <div className="manager-c-sidebar-container">
                <Link href="/manager">
                    <div className="manager-c-sidebar-item">
                        <Tooltip title="Pending Events" placement="bottom-end">
                            <Icon path={mdiLanPending} color='white' />
                        </Tooltip>
                    </div>
                </Link>

                <Link href="/manager/activeevents">
                    <div className="manager-c-sidebar-item">
                        <Tooltip title="Active Events" placement="bottom-end">
                            <Icon path={mdiCheckboxMultipleOutline} color='white' />
                        </Tooltip>
                    </div>
                </Link>

                <Link href="/manager/declinedevents">
                    <div className="manager-c-sidebar-item">
                        <Tooltip title="Declined Events" placement="bottom-end">
                            <Icon path={mdiCloseBoxMultipleOutline} color='white' />
                        </Tooltip>
                    </div>
                </Link>

                <Link href="/manager/settings">
                    <div className="manager-c-sidebar-item">
                        <Tooltip title="Manager Settings" placement="bottom-end">
                            <Icon path={mdiCogs} color='white' />
                        </Tooltip>
                    </div>
                </Link>
                <Link href="/">
                    <div className="manager-c-sidebar-item">
                        <Tooltip title="Logout from Manager" placement="bottom-end">
                            <Icon path={mdiLogout} color='white' />
                        </Tooltip>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;