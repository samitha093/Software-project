import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import Ticket from './components/ticket';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import axios from 'axios'
import {gethost} from '../../session/Session'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Styles from './Styles.module.css'
import Upload from './components/Upload'
import Swal from 'sweetalert2'

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

interface CreateeventProps {     
}

const currencies = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '5',
    label: '5',
  },
];

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

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

export default function MaxWidthDialog() {
  const [openevent, setOpenevent] = React.useState(false);
  const [openticket, setOpenticket] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('lg');

  const [value, setValue] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );

  const handleChanger = (newValue: Date | null) => {
    setValue(newValue);
  };

  const [levels,setlevels] = React.useState("");
  const [event_name,setname] = React.useState<string>("");
  const [event_venue,setvenue] = React.useState<string>("");
  const [event_date,setdate] = React.useState<string>("");
  const [event_time,settime] = React.useState<string>("");
  const [event_img,setimg] = React.useState<string>("");
  const [start_event_date,setstart_event_date] = React.useState<string>("");
  const [endevent_date,setendevent_date] = React.useState<string>("");
  const [area,setarea] = React.useState("");
  const [category,setcategory] = React.useState("");

  const [buy_quantity1,setbuyquantity1] = React.useState<string>("");
  const [buy_amount1,setbuyamount1] = React.useState<string>("");
  const [bid_quantity1,setbidquantity1] = React.useState<string>("");
  const [bid_amount1,setbidamount1] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setlevels(event.target.value);
  };
//For Area
  const areahandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setarea(event.target.value);
  }
  //For category
  const categoryhandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setcategory(event.target.value);
  }

  const handleClickOpen = () => {
    setOpenevent(true);
    setOpenticket(false);
  };

  const handleClose = () => {
    setOpenevent(false);
  };

  const handleClickOpenticket = async() => {
    await submitevent();
  };

  const handleClickSubmitticket = async() =>{
    await submitticket();
    //setOpenticket(false);
  }

  const handleCloseticket = () => {
    setOpenticket(false);
  };
  const eventNameChangeHandler = (event:any)=>{
    setname(event.target.value);
  };
  const eventVenueChangeHandler = (event:any)=>{
    setvenue(event.target.value);
  };
  const eventDateChangeHandler = (event:any)=>{
    setdate(event.target.value);
  };
  const eventTimeChangeHandler = (event:any)=>{
    settime(event.target.value);
  };
  //starting date handler
  const startDateChangeHandler = (event:any)=>{
    setstart_event_date(event.target.value);
  };
  //closing date handler
  const endDateChangeHandler = (event:any)=>{
    setendevent_date(event.target.value);
  };
  const [eventid,seteventid] = React.useState<string>("");
  const submitevent = async() => {

    //get access from gatway for 5min
    await axios.get(gethost() + 'a/refreshtoken',{withCredentials:true})
        .then(async (res)=>{
            //create a headet pack
            const config = {
              headers: { Authorization: `Bearer ${res.data.accesstoken}` }
            };
            //create a body pack
            const datapack = {
              event_name:event_name,
              event_date:event_date,
              event_venue:event_venue,
              event_time:event_time,
              levelcount:levels,
              image_url:event_img,
              publishevent_date:start_event_date,
              endevent_date:endevent_date,
              event_category:category,
              area:area,
            }
            axios.post(gethost()+'s/createaevent',datapack,config)
              .then(async (res)=>{
                await seteventid(res.data);
                for(let i = 1; i <= parseInt(levels, 10); i++){
                  await arr.push(i)
                }
                  setlevels("");
                  setname("");
                  setvenue("");
                  setdate("");
                  settime("");
                  setOpenticket(true);
                  setOpenevent(false);
              })
              .catch((err)=>{
                Swal.fire({
                  icon: 'error',
                  title: 'Authentication Failed',
                  text: 'Please Login to your account',
                  showConfirmButton: false,
                  timer: 2500
                })
              })
          //end connection
        })
  };
//file upload workflow submision
let formdata = new FormData();
const uploadedFileData = async(file:any)=>{
  if(file){
    await formdata.append('Img',file);
    if(formdata){
  axios.post(gethost()+'s/upload',formdata)
  .then(async (res)=>{
      //console.log(res.data)
      setimg(res.data)
  }).catch((err)=>{
      console.log(err)
  })
    }
  }
};
//submit tickets for workflow
const submitticket = () => {
  console.log(eventid)
  return;
  const ticketpack1 = {
    TicketLevel: 1,
    BuyQuantity:buy_quantity1,
    BuyAmount:buy_amount1,
    BidQuantity:bid_quantity1,
    BidAmount:bid_amount1,
    EventId:"6189137cf4bff50043c3c220"
  }
  axios.post(gethost()+'seller/ticketlevels',ticketpack1)
    .then(async (res)=>{
        console.log(res.data)
        setbuyquantity1("");
        setbuyamount1("");
        setbidquantity1("");
        setbidamount1("");
    })
    .catch((err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Authentication Failed',
        text: 'Please Login to your account',
        showConfirmButton: false,
        timer: 2500
      })
    }) 
};

const createticketjson = async(data:any)=>{
  console.log(data)
  if(data){
    //console.log(data)
  }
};
const [arealist,setarealist] = React.useState<any>([]);
const [categorylist,setcategorylist] = React.useState([]);
React.useEffect(()=>{
  axios.get(gethost() + 'g/areas',{withCredentials:false})
    .then(async (res)=>{
        await setarealist(res.data);
    })
    .catch((err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Server Error',
        text: 'Please try again later',
        showConfirmButton: false,
        timer: 2500
      })
    })  
    axios.get(gethost() + 'g/categories',{withCredentials:false})
    .then(async (res)=>{
      await setcategorylist(res.data);
    })
    .catch((err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Server Error',
        text: 'Please try again later',
        showConfirmButton: false,
        timer: 2500
      })
    }) 
},[])
const [arr,setarr] = React.useState<number[]>([]);
var listItems = arr.map((item)=><div key={item}><Ticket data={{eid:eventid,rid:item}}/></div>);

  return (
    <React.Fragment >
      <div className={Styles.btn_class}>
      <BootstrapTooltip title="Publish an Event">
        <Box onClick={handleClickOpen} className={Styles.seller_index_float} sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab color="secondary" aria-label="add">
            <AddIcon />
          </Fab>
        </Box>
      </BootstrapTooltip> 
       </div>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openevent}
      >
        {/* className={Styles.seller_c_ticketsinfo_top_head_right}  remove this class from below*/}
        <BootstrapDialogTitle id="customized_dialog_title1" onClose={handleClose}>
          Create Event
        </BootstrapDialogTitle>
        <DialogContent className={Styles.seller_c_create_table_pos_c}>
        <DialogContent dividers>
        
      <Grid container spacing={2}>
        <Grid className={Styles.seller_c_create_img_in} item xs={6}>
            <div className={Styles.seller_c_create_img_in_R}>
             <Upload data={{change: uploadedFileData}}/>
            </div>
        </Grid>
        <Grid item xs={8} sm container>
          <Grid item xs container direction="column" spacing={1}>
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >

      <div>
      <TextField
          required
          id="outlined-select-currency"
          select
          label="Category"
          value={category}
          onChange={categoryhandleChange}
        >
          {categorylist.map((option:any) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="outlined-required"
          label="Event Name"
          onChange={eventNameChangeHandler}
        />
        <TextField
          required
          id="outlined-required"
          label="Event Venue"
          onChange={eventVenueChangeHandler}
        />
        <div className={Styles.seller_c_create_event_date_time}>
          <div className={Styles.seller_c_create_event_date_time_left}>
          <TextField
            required
            id="date"
            label="Event Date"
            type="date"
            defaultValue="2020-02-02"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={eventDateChangeHandler}
          />                    
          </div>
          <div className={Styles.seller_c_create_event_date_time_right}>
          <TextField
            required
            id="time"
            label="Event Time"
            type="time"
            defaultValue="00:00"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            sx={{ width: 150 }}
            onChange={eventTimeChangeHandler}
          />
          </div>
        </div>
        <div className={Styles.seller_c_create_event_date_time}>
          <div className={Styles.seller_c_create_event_date_time_left}>
          <TextField
            required
            id="date"
            label="Start Selling Date"
            type="date"
            defaultValue="2020-02-02"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={startDateChangeHandler}
          />                    
          </div>
          <div className={Styles.seller_c_create_event_date_time_right}>
          <TextField
            required
            id="date"
            label="Stop Selling Date"
            type="date"
            defaultValue="2020-02-02"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={endDateChangeHandler}
          /> 
          </div>
        </div>
        
        <div className={Styles.seller_c_create_event_date_time}>
          <div className={Styles.seller_c_create_event_date_time_left}>
          <TextField
          required
          id="outlined-select-currency"
          select
          label="Ticket Levels"
          value={levels}
          onChange={handleChange}
          helperText="Please select ticket levels"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>         
          </div>
          <div className={Styles.seller_c_create_event_date_time_right}>
          <TextField
          required
          id="outlined-select-currency"
          select
          label="Area"
          value={area}
          onChange={areahandleChange}
          helperText="Please select Event Area"
        >
          {arealist.map((option:any) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
          </div>
        </div>
      </div>
    </Box>
          </Grid>
        </Grid>
      </Grid>
    <div >
    <Stack direction="row" justifyContent="right" >
    <Button onClick={handleClickOpenticket} variant="contained"  >Submit Event & Next</Button>
    </Stack>
    
    </div>
    
        </DialogContent>
        </DialogContent>
      </Dialog>
      
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openticket}
      >
        {/* className={Styles.seller_c_ticketsinfo_top_head_right} removed that class from below*/}
        <BootstrapDialogTitle id="customized_dialog_title1" onClose={handleCloseticket}>
          Create Tickets
        </BootstrapDialogTitle>
        <DialogContent className={Styles.seller_c_create_table_pos_p}>
        <DialogContent className={Styles.seller_c_create_table_pos} dividers>
        <div>
          <div className={Styles.seller_c_create_table_header}>
            <div className={Styles.seller_c_create_table_header_item}>
              Ticket Level
            </div>
            <div className={Styles.seller_c_create_table_header_item}>
              No of Buying Tickets
            </div>
            <div className={Styles.seller_c_create_table_header_item}>
              Buying Ticket Amount
            </div>
            <div className={Styles.seller_c_create_table_header_item}>
              No of bidding Tickets
            </div>
            <div className={Styles.seller_c_create_table_header_item}>
              bidding Start Amount
            </div>
            <div className={Styles.seller_c_create_table_header_item}>
              Action
            </div>
          </div>
        {listItems}
        </div>
    <div>
      <Stack direction="row" justifyContent="right" >
      {/* <Button onClick={handleClickSubmitticket} className={Styles.seller_btn_pos} variant="contained"  >Submit Tickets</Button> */}
      </Stack>
          </div>
        </DialogContent>
        </DialogContent>
      </Dialog>

    </React.Fragment>
  );
}