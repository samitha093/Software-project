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
  data:any;
}

const ManagerTopBar: React.FC<TopbarProps> = ({ id2 , data}) => {
  const [managertopbar1, setmanagertopbar1] = React.useState(true);
  const [managertopbar2, setmanagertopbar2] = React.useState(false);
  const [managertopbar3, setmanagertopbar3] = React.useState(false);
  const [sellertopbarID, setsellertopbarID] = React.useState(id2);
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
    }
  }


  return (
    <div className={styles.manager_c_topbar}>
      <div className={styles.manager_c_topbar_container}>
          <div className={managertopbar1 ? 'manager-c-topbar-item active' : 'manager-c-topbar-item'} onClick={(e)=>changeID( e, data)}>
            Pending
          </div>

          <div className={managertopbar2 ? 'manager-c-topbar-item active' : 'manager-c-topbar-item'} onClick={(e)=>changeID( e, data)}>
            Active
          </div>

          <div className={managertopbar3 ? 'manager-c-topbar-item active' : 'manager-c-topbar-item'} onClick={(e)=>changeID( e, data)}>
            Declined
          </div>
      </div>
    </div>
  );
}

export default ManagerTopBar;