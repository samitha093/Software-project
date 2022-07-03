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
  id3: string;
}

const SellersTopBar: React.FC<TopbarProps> = ({ id3 }) => {
  const [sellertopbar1, setsellertopbar1] = React.useState(true);
  const [sellertopbar2, setsellertopbar2] = React.useState(false);
  const [sellertopbar3, setsellertopbar3] = React.useState(false);
  React.useEffect(() => {
    if (id3 == "1") {
      setsellertopbar1(true);
      setsellertopbar2(false);
      setsellertopbar3(false);
    } else if (id3 == "2") {
      setsellertopbar1(false);
      setsellertopbar2(true);
      setsellertopbar3(false);
    } else if (id3 == "3") {
      setsellertopbar1(false);
      setsellertopbar2(false);
      setsellertopbar3(true);
    }
  }, []);
  return (
    <div className={styles.manager_c_topbar}>
      <div className={styles.manager_c_topbar_container}>
        <Link href="/manager/pendingevents">
          <div className={sellertopbar1 ? 'manager-c-topbar-item active' : 'manager-c-topbar-item'}>
            Pending
          </div>
        </Link>

        <Link href="/manager/activeevents">
          <div className={sellertopbar2 ? 'manager-c-topbar-item active' : 'manager-c-topbar-item'}>
            Active
          </div>
        </Link>

        <Link href="/manager/declinedevents">
          <div className={sellertopbar3 ? 'manager-c-topbar-item active' : 'manager-c-topbar-item'}>
            Declined
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SellersTopBar;