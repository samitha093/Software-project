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
import Ticket from './components/Ticket';
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
import DialogActions from '@mui/material/DialogActions';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

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

  const [arr,setarr] = React.useState<number[]>([]);

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

  const [nameError, setNewnameError] = React.useState<boolean>(false);
  const [venueError, setNewvenueError] = React.useState<boolean>(false);
  const [dateError, setNewdateError] = React.useState<boolean>(false);
  const [stdateError, setNewstdateError] = React.useState<boolean>(false);
  const [spdateError, setNewspdateError] = React.useState<boolean>(false);
  const [alldateError, setdatesError] = React.useState<boolean>(false);

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


  const handleCloseticket = () => {
    setOpenticket(false);
  };
  const eventNameChangeHandler = (event:any)=>{
    const newpcatergory_regex = /^[A-Z].{3,19}$/;
    const valid = !!event.target.value.match(newpcatergory_regex);
    setname(event.target.value);
    setNewnameError(!valid);
  };
  const eventVenueChangeHandler = (event:any)=>{
    const newpcatergory_regex = /^[A-Z].{3,19}$/;
    const valid = !!event.target.value.match(newpcatergory_regex);
    setvenue(event.target.value);
    setNewvenueError(!valid);
  };
  const eventDateChangeHandler = (event:any)=>{
    const date = new Date();
    const days = 1
    date.setDate(date.getDate() + days);
    const valid = (new Date(event.target.value) > date);
    setNewdateError(!valid);
    setdate(event.target.value);
  };
  const eventTimeChangeHandler = (event:any)=>{
    settime(event.target.value);
  };
  //starting date handler
  const startDateChangeHandler = (event:any)=>{
    const valid = (new Date(event.target.value) > new Date());
    setNewstdateError(!valid);
    setstart_event_date(event.target.value);
  };
  //closing date handler
  const endDateChangeHandler = (event:any)=>{
    const valid = (new Date(event.target.value) > new Date());
    setNewspdateError(!valid);
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
  // console.log(ticket,arr.length)
  setLoading(true);
  arr.forEach(submittodatabase);
  setactive(true);
  setLoading(false);
  setOpenticket(false);
  Toast.fire({
    icon: 'success',
    title: 'Pending Event Submited successfully'
  })
  setarr([]);
  setactive(false);
};
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
const submittodatabase =(id:any)=>{
  //get access from gatway for 5min
  axios.get(gethost() + 'a/refreshtoken',{withCredentials:true})
  .then(async (res)=>{
      //create a headet pack
      const config = {
      headers: { Authorization: `Bearer ${res.data.accesstoken}` }
      };
      //create a body pack
      const datapack = {
          ticket_level:1,
          buy_quantity:ticket[id-1].buyCount,
          buy_amount:ticket[id-1].buyAmount,
          bid_quantity:ticket[id-1].bidCount,
          min_bid_amount:ticket[id-1].bidAmount,
      }
      axios.post(gethost()+'s/createaticket/'+ eventid ,datapack,config)
      .then(async (res)=>{
         // console.log("saved");
      })
      .catch((err)=>{
          console.log(err);
      })
  })
  //end connection
}
const [ticket,setticket] = React.useState([
  {buyCount:"",buyAmount:"",bidCount:"",bidAmount:""},
  {buyCount:"",buyAmount:"",bidCount:"",bidAmount:""},
  {buyCount:"",buyAmount:"",bidCount:"",bidAmount:""},
  {buyCount:"",buyAmount:"",bidCount:"",bidAmount:""},
  {buyCount:"",buyAmount:"",bidCount:"",bidAmount:""},
]);
const submitIntoArray = (e:any,tag:any,id:any) => {
  if(id=="1"){
    tag=="A"?ticket[0].buyCount=e.target.value:tag=="B"?ticket[0].buyAmount=e.target.value:tag=="C"?ticket[0].bidCount=e.target.value:ticket[0].bidAmount=e.target.value;
  }
  if(id=="2"){
    tag=="A"?ticket[1].buyCount=e.target.value:tag=="B"?ticket[1].buyAmount=e.target.value:tag=="C"?ticket[1].bidCount=e.target.value:ticket[1].bidAmount=e.target.value;
  }
  if(id=="3"){
    tag=="A"?ticket[2].buyCount=e.target.value:tag=="B"?ticket[2].buyAmount=e.target.value:tag=="C"?ticket[2].bidCount=e.target.value:ticket[2].bidAmount=e.target.value;
  }
  if(id=="4"){
    tag=="A"?ticket[3].buyCount=e.target.value:tag=="B"?ticket[3].buyAmount=e.target.value:tag=="C"?ticket[3].bidCount=e.target.value:ticket[3].bidAmount=e.target.value;
  }
  if(id=="5"){
    tag=="A"?ticket[4].buyCount=e.target.value:tag=="B"?ticket[4].buyAmount=e.target.value:tag=="C"?ticket[4].bidCount=e.target.value:ticket[4].bidAmount=e.target.value;
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

var listItems = arr.map((item)=><div key={item}><Ticket data={{eid:eventid,rid:item}} array={{change: submitIntoArray}}/></div>);
const [loading, setLoading] = React.useState(false);
const [activate, setactive] = React.useState(false);
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
        {nameError && (<p className={Styles.seller_catergory_error_message}> * Event Name must contain 4-20 characters and first letter must be capital</p>)}
        <TextField
          required
          id="outlined-required"
          label="Event Venue"
          onChange={eventVenueChangeHandler}
        />
        {venueError && (<p className={Styles.seller_catergory_error_message}> * Event Venue must contain 4-20 characters and first letter must be capital</p>)}
        <div className={Styles.seller_c_create_event_date_time}>
          <div className={Styles.seller_c_create_event_date_time_left}>
          <TextField
            required
            id="date"
            label="Event Date"
            type="date"
            //defaultValue="2020-02-02"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={eventDateChangeHandler}
          />
          {dateError && (<p className={Styles.seller_catergory_error_message}> * Event date must be Greater than the present date</p>)}                    
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
            //defaultValue="2020-02-02"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={startDateChangeHandler}
          />
          {stdateError && (<p className={Styles.seller_catergory_error_message}> * Start Selling date must be Equal or Greater than the present date</p>)}                    
          </div>
          <div className={Styles.seller_c_create_event_date_time_right}>
          <TextField
            required
            id="date"
            label="Stop Selling Date"
            type="date"
            //defaultValue="2022-02-02"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={endDateChangeHandler}
          />
          {spdateError && (<p className={Styles.seller_catergory_error_message}> * Stop Selling date must be Equal or Greater than the present date</p>)} 
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
    <Button disabled={nameError||venueError||spdateError||stdateError||dateError||alldateError} onClick={handleClickOpenticket} variant="contained"  >Submit Event & Next</Button>
    </Stack>
    {alldateError && (<p className={Styles.seller_catergory_error_message}> * Start '&' Stop selling dates must be less than Event date and Start date must be less or equal than Stop date</p>)}
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
              Fixed Price
            </div>
            <div className={Styles.seller_c_create_table_header_item}>
              No of Bidding Tickets
            </div>
            <div className={Styles.seller_c_create_table_header_item}>
              Starting Bid
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
        <DialogActions>
          <div className={Styles.seller_c_create_ticket_button}>
          <LoadingButton
              size="small"
              color="secondary"
              onClick={submitticket}
              loading={loading}
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="contained"
              disabled={activate}
              >
              Submit Event
          </LoadingButton>
          </div>
        </DialogActions>
      </Dialog>

    </React.Fragment>
  );
}