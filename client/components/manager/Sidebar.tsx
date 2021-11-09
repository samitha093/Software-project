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
                    <Tooltip title="Pending Events" placement="bottom-end">
                        <div className="manager-c-sidebar-item">
                            <Icon path={mdiLanPending} color='white' />
                        </div>
                    </Tooltip>
                </Link>

                <Link href="/manager/activeevents">
                    <Tooltip title="Active Events" placement="bottom-end">
                        <div className="manager-c-sidebar-item">
                            <Icon path={mdiCheckboxMultipleOutline} color='white' />
                        </div>
                    </Tooltip>
                </Link>

                <Link href="/manager/declinedevents">
                    <Tooltip title="Declined Events" placement="bottom-end">
                        <div className="manager-c-sidebar-item">
                            <Icon path={mdiCloseBoxMultipleOutline} color='white' />
                        </div>
                    </Tooltip>
                </Link>

                <Link href="/manager/settings">
                    <Tooltip title="Manager Settings" placement="bottom-end">
                        <div className="manager-c-sidebar-item">
                            <Icon path={mdiCogs} color='white' />
                        </div>
                    </Tooltip>
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