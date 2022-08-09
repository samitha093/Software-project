import React from 'react'
import Link from 'next/link'
import Icon from '@mdi/react';
import { mdiHomeOutline } from '@mdi/js';
import { mdiCalendarSearch } from '@mdi/js';
import { mdiCalendarClock } from '@mdi/js';
import { mdiCalendarCheck } from '@mdi/js';
import { mdiCalendarRemove } from '@mdi/js';
import { mdiCogs } from '@mdi/js';
import { mdiLogout } from '@mdi/js';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Styles from './Styles.module.css'

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
  id : string;
  data:any;
}


const Topbar: React.FC<TopbarProps> = ({id, data}) => {
const [sellertopbar1,setsellertopbar1] = React.useState(true);
const [sellertopbar2,setsellertopbar2] = React.useState(false);
const [sellertopbar3,setsellertopbar3] = React.useState(false);
const [sellertopbar4,setsellertopbar4] = React.useState(false);
const [sellertopbarID, setsellertopbarID] = React.useState(id);

    React.useEffect(() => {
        if(sellertopbarID == "1"){
            setsellertopbar1(true);  
            setsellertopbar2(false);
            setsellertopbar3(false);
            setsellertopbar4(false);
        }else if(sellertopbarID == "2"){
            setsellertopbar1(false);  
            setsellertopbar2(true);
            setsellertopbar3(false);
            setsellertopbar4(false);
        }else if(sellertopbarID == "3"){
            setsellertopbar1(false);  
            setsellertopbar2(false);
            setsellertopbar3(true);
            setsellertopbar4(false);
        }else if(sellertopbarID == "4"){
            setsellertopbar1(false);  
            setsellertopbar2(false);
            setsellertopbar3(false);
            setsellertopbar4(true);
        }     
    },[sellertopbarID]);

    async function changeID(id:any, data:any){
        if(id.target.childNodes[0].nodeValue == 'Pending'){
          setsellertopbarID("1");
          data.change("1")
        }else if(id.target.childNodes[0].nodeValue == 'Active'){
          setsellertopbarID("2");
          data.change("2")
        }else if(id.target.childNodes[0].nodeValue == 'End'){
          setsellertopbarID("3");
          data.change("3")
        }else if(id.target.childNodes[0].nodeValue == 'Declined'){
          setsellertopbarID("4");
          data.change("4")
        }
      }
        return (
            <div className={Styles.seller_c_topbar}>
                    <div className={Styles.seller_c_topbar_container}>
                            <div className={sellertopbar1 ? 'seller_c_topbar_item active' : 'seller_c_topbar_item'} onClick={(e)=>changeID( e, data)}>
                            Pending
                            </div>

                            <div className={sellertopbar2 ? 'seller_c_topbar_item active' : 'seller_c_topbar_item'} onClick={(e)=>changeID( e, data)}>
                            Active
                            </div>

                            <div className={sellertopbar3 ? 'seller_c_topbar_item active' : 'seller_c_topbar_item'} onClick={(e)=>changeID( e, data)}>
                            End
                            </div>

                        <div className={sellertopbar4 ? 'seller_c_topbar_item active' : 'seller_c_topbar_item'} onClick={(e)=>changeID( e, data)}>
                            Declined
                        </div>
                    </div>
            </div>
        );
}

export default Topbar;