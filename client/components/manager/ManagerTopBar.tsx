import React from 'react'
import Link from 'next/link'
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

import styles from './styles.module.css'
import classnames from 'classnames';

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

interface TopbarProps {
  id2: string;
}

const ManagerTopBar: React.FC<TopbarProps> = ({ id2 }) => {
  const [managertopbar1, setmanagertopbar1] = React.useState(true);
  const [managertopbar2, setmanagertopbar2] = React.useState(false);
  const [managertopbar3, setmanagertopbar3] = React.useState(false);
  React.useEffect(() => {
    if (id2 == "1") {
      setmanagertopbar1(true);
      setmanagertopbar2(false);
      setmanagertopbar3(false);
    } else if (id2 == "2") {
      setmanagertopbar1(false);
      setmanagertopbar2(true);
      setmanagertopbar3(false);
    } else if (id2 == "3") {
      setmanagertopbar1(false);
      setmanagertopbar2(false);
      setmanagertopbar3(true);
    }
  }, []);
  return (
    <div className={styles.manager_c_topbar}>
      <div className={styles.manager_c_topbar_container}>
        <Link href="/manager/pendingevents">
          <div className={managertopbar1 ? 'manager-c-topbar-item active' : 'manager-c-topbar-item'}>
            Pending
          </div>
        </Link>

        <Link href="/manager/activeevents">
          <div className={managertopbar2 ? 'manager-c-topbar-item active' : 'manager-c-topbar-item'}>
            Active
          </div>
        </Link>

        <Link href="/manager/declinedevents">
          <div className={managertopbar3 ? 'manager-c-topbar-item active' : 'manager-c-topbar-item'}>
            Declined
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ManagerTopBar;