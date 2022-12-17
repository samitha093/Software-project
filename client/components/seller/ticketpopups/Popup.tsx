import React from 'react'
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import axios from 'axios'
import DialogActions from '@mui/material/DialogActions';
import {gethost} from '../../../session/Session'
import Swal from 'sweetalert2'
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import SellIcon from '@mui/icons-material/Sell';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import EventInfo from './EventInfo'
import Nopermission from './Nopermission'
import Styles from './styles.module.scss'

import SellingInfo from './SellingInfo'
import Tickets from './Tickets'
import Analitics from './Analitics'
import Buyers from './Buyers'
import Bidders from './Bidders'

interface PopupProps {
    data:any,
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
  }
  
  const BootstrapDialogTitle = (props: DialogTitleProps) => {
    var ticketcount = 0;
    const { children, onClose, ...other } = props;
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

const Popup: React.FC<PopupProps> = ({data}) => {

    const [Open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const [items, setitem] = React.useState<any[]>([])
    React.useEffect(()=>{
      setitem(data.tickets);
      var asd = gethost()+data.image_url
      setTicketImg(`url("`+asd+`")`);
    },[data])

    const [value, setValue] = React.useState("1");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const [ticketImg,setTicketImg] = React.useState("")
    

    return (
        <div className={Styles.bg}>
            <div className={Styles.seller_c_tickets} onClick={handleClickOpen}>
                <div>
                    <div className={Styles.seller_c_tickets_top} style={{backgroundImage:ticketImg}}>
                        <div className={Styles.seller_c_tickets_top_info}>
                            <div className={Styles.seller_c_tickets_top_info_left}>
                                <div className={Styles.seller_c_tickets_top_info_left_name}>
                                    {data.event_name}
                                </div>
                                <div className={Styles.seller_c_tickets_top_info_left_date}>
                                    {data.event_date}
                                </div>
                            </div>
                            <div className={Styles.seller_c_tickets_top_info_right}>
                                <div className={Styles.seller_c_tickets_top_info_right_nooftickets}>{data.views}</div>
                                <div className={Styles.seller_c_tickets_top_info_right_tickets}>views</div>
                            </div>
                        </div>
                    </div>
                    <h5 className={Styles.seller_c_tickets_cardstatus}> {data.event_venue}</h5>
                </div>
            </div>
            <BootstrapDialog aria-labelledby={Styles.customized_dialog_title1} open={Open} maxWidth={'lg'} fullWidth={true}>
                <BootstrapDialogTitle id={Styles.customized_dialog_title1} onClose={handleClose}>
                    {data.status} EVENT
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <div className={Styles.ticketview}>
                        <h1>{data.event_name}</h1>  
                    </div>
                    <TabContext value={value}>
                    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
                        <Tab icon={<EventNoteIcon />} iconPosition="start" label="Event Summery" value={"1"}/>
                        <Tab icon={<EqualizerIcon />} iconPosition="start" label="Analitics" value={"2"}/>
                        <Tab icon={<PersonPinIcon />} iconPosition="start" label="Bidder List" value={"4"} />
                        <Tab icon={<ConfirmationNumberIcon />} iconPosition="start" label="Tickets" value={"5"}/>
                    </Tabs>  
                    <TabPanel value="1">
                        <EventInfo data={data}/>
                    </TabPanel>
                    <TabPanel value="2">{(data.status=="ACTIVE")||(data.status=="END")?<SellingInfo data={data}/>:<Nopermission/>}</TabPanel>
                    <TabPanel value="5">{(data.status=="END")||(data.status=="ACTIVE")?<Tickets data={data}/>:<Nopermission/>}</TabPanel>
                    <TabPanel value="6">{(data.status=="END")||(data.status=="ACTIVE")?<Analitics/>:<Nopermission/>}</TabPanel>
                    <TabPanel value="3">{(data.status=="END")||(data.status=="ACTIVE")?<Buyers/>:<Nopermission/>}</TabPanel>
                    <TabPanel value="4">{(data.status=="END")||(data.status=="ACTIVE")?<Bidders data={data}/>:<Nopermission/>}</TabPanel>
                    </TabContext>
                </DialogContent>
                <DialogActions>
                  {data.status=="PENDING"?
                    <Button autoFocus onClick={handleClose}>
                        EDIT EVENT     
                    </Button>
                  :null}
                </DialogActions>
            </BootstrapDialog>   
        </div>
    );
}

export default Popup;