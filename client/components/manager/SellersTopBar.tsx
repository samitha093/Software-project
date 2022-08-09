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
  data:any;
}

const SellersTopBar: React.FC<TopbarProps> = ({ id3 , data }) => {
  const [sellertopbar1, setsellertopbar1] = React.useState(true);
  const [sellertopbar2, setsellertopbar2] = React.useState(false);
  const [sellertopbar3, setsellertopbar3] = React.useState(false);
  const [sellertopbar4, setsellertopbar4] = React.useState(false);
  const [sellertopbarID, setsellertopbarID] = React.useState(id3);
  React.useEffect(() => {
    if (sellertopbarID == "0") {
      setsellertopbar1(true);
      setsellertopbar2(false);
      setsellertopbar3(false);
      setsellertopbar4(false);
    } else if (sellertopbarID == "1") {
      setsellertopbar1(false);
      setsellertopbar2(true);
      setsellertopbar3(false);
      setsellertopbar4(false);
    } else if (sellertopbarID == "2") {
      setsellertopbar1(false);
      setsellertopbar2(false);
      setsellertopbar3(true);
      setsellertopbar4(false);
    }else if (sellertopbarID == "3") {
      setsellertopbar1(false);
      setsellertopbar2(false);
      setsellertopbar3(false);
      setsellertopbar4(true);
    }
  }, [sellertopbarID]);

  async function changeID(id:any, data:any){
    if(id.target.childNodes[0].nodeValue == 'Pending'){
      setsellertopbarID("1");
      await data.change("1")
    }else if(id.target.childNodes[0].nodeValue == 'Active'){
      setsellertopbarID("2");
      data.change("2")
    }else if(id.target.childNodes[0].nodeValue == 'Declined'){
      setsellertopbarID("3");
      data.change("3")
    }else if(id.target.childNodes[0].nodeValue == 'All'){
      setsellertopbarID("0");
      data.change("0")
    }
  }

  return (
    <div className={styles.manager_c_topbar}>
      <div className={styles.manager_c_topbar_container}>

      <div className={sellertopbar1 ? 'manager-c-topbar-item active' : 'manager-c-topbar-item'} onClick={(e)=>changeID( e, data)}>
          All
        </div>

        <div className={sellertopbar2 ? 'manager-c-topbar-item active' : 'manager-c-topbar-item'} onClick={(e)=>changeID( e, data)}>
          Pending
        </div>

        <div className={sellertopbar3 ? 'manager-c-topbar-item active' : 'manager-c-topbar-item'} onClick={(e)=>changeID( e, data)}>
          Active
        </div>

        <div className={sellertopbar4 ? 'manager-c-topbar-item active' : 'manager-c-topbar-item'} onClick={(e)=>changeID( e, data)}>
          Declined
        </div>

      </div>
    </div>
  );
}

export default SellersTopBar;