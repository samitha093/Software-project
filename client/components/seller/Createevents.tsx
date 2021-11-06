import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Createtickets from '../../components/seller/Createtickets'
import TextField from '@mui/material/TextField';
import axios from 'axios'
import {gethost} from '../../session/Session'

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
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('lg');

  const [value, setValue] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );

  const handleChanger = (newValue: Date | null) => {
    setValue(newValue);
  };

  const [currency, setCurrency] = React.useState("");
  const [event_name,setname] = React.useState<string>("");
  const [event_venue,setvenue] = React.useState<string>("");
  const [event_date,setdate] = React.useState<string>("");
  const [event_time,settime] = React.useState<string>("");
  const [ticket_levels,setlevel] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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

  const submitevent = () => {
    const datapack = {
      EventName:event_name,
      EventDate:event_date,
      EventVenue:event_venue,
      EventTime:event_time,
      TicketLevel:currency,
      ImageUrl:"fehgjngjfgd",
      UserId:"61842a1e0ec95f011fdc3bcf"
    }
    axios.post(gethost()+'seller/events',datapack)
          .then(async (res)=>{
              console.log(res.data)
          })
    console.log(datapack);
    
  };
  

  //const [event_name] = React.useState<string>("eventName");
  /*React.useEffect(()=>{
    const datapack = {
      EventName:event_name,
      EventDate:event_date,
      EventVenue:event_venue,
      EventTime:event_time,
      TicketLevel:ticket_levels,
      ImageUrl:"fehgjngjfgd",
      UserId:"61842a1e0ec95f011fdc3bcf"
    }
    console.log(datapack)
      axios.post('http://localhost:8000/seller/events',datapack)
          .then(async (res)=>{
              console.log(res.data)
          })
      
  },[])*/

  return (
    <React.Fragment >
      <div className="btn-class">
        <Button 
        className= "btn-create" 
        variant="contained" 
        startIcon = {<CreateIcon/>}
        onClick={handleClickOpen}
        >Publish an Event</Button>
       </div>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Create Event
        </BootstrapDialogTitle>
        <DialogContent>
        <DialogContent dividers>
        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 1500, flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ButtonBase sx={{ width: 250, height: 220 }}>
            <Img alt="complex" src="/assets/office-chair.png" />
          </ButtonBase>
        </Grid>
        <Grid item xs={8} sm container>
          <Grid item xs container direction="column" spacing={1}>
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-required"
          label="Event Name"
          onChange={eventNameChangeHandler}
        />
        <TextField
          id="outlined-required"
          label="Event Venue"
          onChange={eventVenueChangeHandler}
        />
        <TextField
        id="date"
        label="Event Date"
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={eventDateChangeHandler}
      />
      <TextField
        id="time"
        label="Event Time"
        type="time"
        defaultValue="07:30"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ width: 150 }}
        onChange={eventTimeChangeHandler}
      />
        <TextField
          id="outlined-select-currency"
          select
          label="Ticket Levels"
          value={currency}
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
    </Box>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <div onClick={submitevent}>
    <Createtickets/>
    </div>
    
        </DialogContent>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}