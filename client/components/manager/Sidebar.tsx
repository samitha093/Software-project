import React from 'react'
import Link from 'next/link'
import Icon from '@mdi/react';
import { mdiLanPending } from '@mdi/js';
import { mdiCheckboxMultipleOutline } from '@mdi/js';
import { mdiCloseBoxMultipleOutline } from '@mdi/js';
import { mdiCogs } from '@mdi/js';
import { mdiLogout } from '@mdi/js';
import Tooltip from '@mui/material/Tooltip';
import { endsession } from '../../session/Session';
import { useRouter } from 'next/router';

interface SidebarProps {

}

const Sidebar: React.FC<SidebarProps> = ({ }) => {
    const router = useRouter()

    async function logout() {
        endsession();
        router.push('/user');
    }
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
                <Tooltip title="Logout from Manager" placement="bottom-end">
                    <div onClick={logout} className="manager-c-sidebar-item">

                        <Icon path={mdiLogout} color='white' />
                    </div>
                </Tooltip>
            </div>
        </div>
    );
}

export default Sidebar;