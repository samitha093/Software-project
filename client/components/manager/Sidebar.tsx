import React from 'react'
import Link from 'next/link'
import Icon from '@mdi/react';
import { mdiHomeOutline } from '@mdi/js';
import { mdiCalendarSearch } from '@mdi/js';
import { mdiCogs } from '@mdi/js';
import { mdiLogout } from '@mdi/js';
import { mdiAccountGroup } from '@mdi/js';
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
                    <Tooltip title="Home Page" placement="bottom-end">
                        <div className="manager-c-sidebar-item">
                            <Icon className="manager-c-sidebar-item-icon" path={mdiHomeOutline} />
                        </div>
                    </Tooltip>
                </Link>

                <Link href="/manager/pendingevents">
                    <Tooltip title="Events" placement="bottom-end">
                        <div className="manager-c-sidebar-item">
                            <Icon className="manager-c-sidebar-item-icon" path={mdiCalendarSearch} />
                        </div>
                    </Tooltip>
                </Link>

                <Link href="/manager/sellers">
                    <Tooltip title="Sellers" placement="bottom-end">
                        <div className="manager-c-sidebar-item">
                            <Icon className="manager-c-sidebar-item-icon" path={mdiAccountGroup} />
                        </div>
                    </Tooltip>
                </Link>


                <Link href="/manager/settings">
                    <Tooltip title="Manager Settings" placement="bottom-end">
                        <div className="manager-c-sidebar-item">
                            <Icon className="manager-c-sidebar-item-icon" path={mdiCogs} />
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