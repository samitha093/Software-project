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
  const [sellerstopbar1, setsellerstopbar1] = React.useState(true);
  const [sellerstopbar2, setsellerstopbar2] = React.useState(false);
  React.useEffect(() => {
    if (id3 == "1") {
      setsellerstopbar1(true);
      setsellerstopbar2(false);
    } else if (id3 == "2") {
      setsellerstopbar1(false);
      setsellerstopbar2(true);
    }
  }, []);
  return (
    <div className={styles.manager_seller_c_topbar}>
      <div className={styles.manager_seller_c_topbar_container}>
        <Link href="/manager/activesellers">
          <div className={sellerstopbar1 ? 'manager-seller-c-topbar-item active' : 'manager-seller-c-topbar-item'}>
            Active
          </div>
        </Link>

        <Link href="/manager/pendingsellers">
          <div className={sellerstopbar2 ? 'manager-seller-c-topbar-item active' : 'manager-seller-c-topbar-item'}>
            Pending
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SellersTopBar;