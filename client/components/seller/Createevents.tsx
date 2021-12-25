import * as React from 'react';
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
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Box from '@mui/material/Box';
import axios from 'axios'
import {gethost} from '../../session/Session'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

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
  const [level1, setlevel1] = React.useState(false);
  const [level2, setlevel2] = React.useState(false);
  const [level3, setlevel3] = React.useState(false);
  const [level4, setlevel4] = React.useState(false);
  const [level5, setlevel5] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('lg');

  const [value, setValue] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );

  const handleChanger = (newValue: Date | null) => {
    setValue(newValue);
  };

  const [currency,setCurrency] = React.useState("");
  const [event_name,setname] = React.useState<string>("");
  const [event_venue,setvenue] = React.useState<string>("");
  const [event_date,setdate] = React.useState<string>("");
  const [event_time,settime] = React.useState<string>("");

  const [buy_quantity1,setbuyquantity1] = React.useState<string>("");
  const [buy_amount1,setbuyamount1] = React.useState<string>("");
  const [bid_quantity1,setbidquantity1] = React.useState<string>("");
  const [bid_amount1,setbidamount1] = React.useState<string>("");

  const [buy_quantity2,setbuyquantity2] = React.useState<string>("");
  const [buy_amount2,setbuyamount2] = React.useState<string>("");
  const [bid_quantity2,setbidquantity2] = React.useState<string>("");
  const [bid_amount2,setbidamount2] = React.useState<string>("");

  const [buy_quantity3,setbuyquantity3] = React.useState<string>("");
  const [buy_amount3,setbuyamount3] = React.useState<string>("");
  const [bid_quantity3,setbidquantity3] = React.useState<string>("");
  const [bid_amount3,setbidamount3] = React.useState<string>("");

  const [buy_quantity4,setbuyquantity4] = React.useState<string>("");
  const [buy_amount4,setbuyamount4] = React.useState<string>("");
  const [bid_quantity4,setbidquantity4] = React.useState<string>("");
  const [bid_amount4,setbidamount4] = React.useState<string>("");

  const [buy_quantity5,setbuyquantity5] = React.useState<string>("");
  const [buy_amount5,setbuyamount5] = React.useState<string>("");
  const [bid_quantity5,setbidquantity5] = React.useState<string>("");
  const [bid_amount5,setbidamount5] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
    const valuee = event.target.value;
    if(valuee=="1"){
      setlevel1(true);
      setlevel2(false);
      setlevel3(false);
      setlevel4(false);
      setlevel5(false);
    }
    else if(valuee=="2"){
      setlevel1(true);
      setlevel2(true);
      setlevel3(false);
      setlevel4(false);
      setlevel5(false);
    }
    else if(valuee=="3"){
      setlevel1(true);
      setlevel2(true);
      setlevel3(true);
      setlevel4(false);
      setlevel5(false);
    }
    else if(valuee=="4"){
      setlevel1(true);
      setlevel2(true);
      setlevel3(true);
      setlevel4(true);
      setlevel5(false);
    }
    else{
      setlevel1(true);
      setlevel2(true);
      setlevel3(true);
      setlevel4(true);
      setlevel5(true);
    }
  };

  const handleClickOpen = () => {
    setOpenevent(true);
    setOpenticket(false);
  };

  const handleClose = () => {
    setOpenevent(false);
  };

  const handleClickOpenticket = async() => {
    await submitevent();
    setOpenticket(true);
    setOpenevent(false);
  };

  const handleClickSubmitticket = async() =>{
    await submitticket();
    setOpenticket(false);
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

  const buyquantity1ChangeHandler = (event:any)=>{
    setbuyquantity1(event.target.value);
  };
  const buyamount1ChangeHandler = (event:any)=>{
    setbuyamount1(event.target.value);
  };
  const bidquantity1ChangeHandler = (event:any)=>{
    setbidquantity1(event.target.value);
  };
  const bidamount1ChangeHandler = (event:any)=>{
    setbidamount1(event.target.value);
  };

  const buyquantity2ChangeHandler = (event:any)=>{
    setbuyquantity2(event.target.value);
  };
  const buyamount2ChangeHandler = (event:any)=>{
    setbuyamount2(event.target.value);
  };
  const bidquantity2ChangeHandler = (event:any)=>{
    setbidquantity2(event.target.value);
  };
  const bidamount2ChangeHandler = (event:any)=>{
    setbidamount2(event.target.value);
  };

  const buyquantity3ChangeHandler = (event:any)=>{
    setbuyquantity3(event.target.value);
  };
  const buyamount3ChangeHandler = (event:any)=>{
    setbuyamount3(event.target.value);
  };
  const bidquantity3ChangeHandler = (event:any)=>{
    setbidquantity3(event.target.value);
  };
  const bidamount3ChangeHandler = (event:any)=>{
    setbidamount3(event.target.value);
  };

  const buyquantity4ChangeHandler = (event:any)=>{
    setbuyquantity4(event.target.value);
  };
  const buyamount4ChangeHandler = (event:any)=>{
    setbuyamount4(event.target.value);
  };
  const bidquantity4ChangeHandler = (event:any)=>{
    setbidquantity4(event.target.value);
  };
  const bidamount4ChangeHandler = (event:any)=>{
    setbidamount4(event.target.value);
  };

  const buyquantity5ChangeHandler = (event:any)=>{
    setbuyquantity5(event.target.value);
  };
  const buyamount5ChangeHandler = (event:any)=>{
    setbuyamount5(event.target.value);
  };
  const bidquantity5ChangeHandler = (event:any)=>{
    setbidquantity5(event.target.value);
  };
  const bidamount5ChangeHandler = (event:any)=>{
    setbidamount5(event.target.value);
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
              setCurrency("");
              setname("");
              setvenue("");
              setdate("");
              settime("");
          })
  };

  const submitticket = () => {
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

    const ticketpack2 = {
      TicketLevel: 2,
      BuyQuantity:buy_quantity2,
      BuyAmount:buy_amount2,
      BidQuantity:bid_quantity2,
      BidAmount:bid_amount2,
      EventId:"6189137cf4bff50043c3c220"
    }
    axios.post(gethost()+'seller/ticketlevels',ticketpack2)
          .then(async (res)=>{
              console.log(res.data)
              setbuyquantity2("");
              setbuyamount2("");
              setbidquantity2("");
              setbidamount2("");
          })

    const ticketpack3 = {
      TicketLevel: 3,
      BuyQuantity:buy_quantity3,
      BuyAmount:buy_amount3,
      BidQuantity:bid_quantity3,
      BidAmount:bid_amount3,
      EventId:"6189137cf4bff50043c3c220"
    }
    axios.post(gethost()+'seller/ticketlevels',ticketpack3)
          .then(async (res)=>{
              console.log(res.data)
              setbuyquantity3("");
              setbuyamount3("");
              setbidquantity3("");
              setbidamount3("");
          })

    const ticketpack4 = {
      TicketLevel: 4,
      BuyQuantity:buy_quantity4,
      BuyAmount:buy_amount4,
      BidQuantity:bid_quantity4,
      BidAmount:bid_amount4,
      EventId:"6189137cf4bff50043c3c220"
    }
    axios.post(gethost()+'seller/ticketlevels',ticketpack4)
          .then(async (res)=>{
              console.log(res.data)
              setbuyquantity4("");
              setbuyamount4("");
              setbidquantity4("");
              setbidamount4("");
          })

    const ticketpack5 = {
      TicketLevel: 5,
      BuyQuantity:buy_quantity5,
      BuyAmount:buy_amount5,
      BidQuantity:bid_quantity5,
      BidAmount:bid_amount5,
      EventId:"6189137cf4bff50043c3c220"
    }
    axios.post(gethost()+'seller/ticketlevels',ticketpack5)
          .then(async (res)=>{
              console.log(res.data)
              setbuyquantity5("");
              setbuyamount5("");
              setbidquantity5("");
              setbidamount5("");
          })
  };

  return (
    <React.Fragment >
      <div className="btn-class">
      <BootstrapTooltip title="Publish an Event">
        <Box onClick={handleClickOpen} className="seller-index-float" sx={{ '& > :not(style)': { m: 1 } }}>
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
        <BootstrapDialogTitle id="customized-dialog-title" className="manager-c-ticketsinfo-top-head-right" onClose={handleClose}>
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
        <TextField
          required
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
        <BootstrapDialogTitle id="customized-dialog-title" className="manager-c-ticketsinfo-top-head-right" onClose={handleCloseticket}>
          Create Tickets
        </BootstrapDialogTitle>
        <DialogContent>
        <DialogContent dividers>
        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 1500, flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent="space-evenly">
        <Grid item xs={6}>
          <ButtonBase sx={{ width: 200, height: 150 }}>
            <Img alt="complex" src="/assets/office-chair.png" />
          </ButtonBase>
        </Grid>
        <Grid item xs={8} sm container>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 180 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ticket Level</TableCell>
            <TableCell align="right">Fix Price&nbsp;(Rs)</TableCell>
            <TableCell align="right">Fix Amount</TableCell>
            <TableCell align="right">Bid Price&nbsp;(Rs)</TableCell>
            <TableCell align="right">Bid Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {level1?
            <TableRow >
            <TableCell>Level 1</TableCell>
            <TableCell><TextField onChange={buyamount1ChangeHandler} id="outlined-number" type="number" InputLabelProps={{shrink: true,}} variant="standard"/></TableCell>
            <TableCell><TextField onChange={buyquantity1ChangeHandler} id="outlined-number" type="number" InputLabelProps={{shrink: true,}} variant="standard"/></TableCell>
            <TableCell><TextField onChange={bidamount1ChangeHandler} id="outlined-number" type="number" InputLabelProps={{shrink: true,}} variant="standard"/></TableCell>
            <TableCell><TextField onChange={bidquantity1ChangeHandler} id="outlined-number" type="number" InputLabelProps={{shrink: true,}} variant="standard"/></TableCell>
          </TableRow>
          :null}
          {level2?
            <TableRow >
            <TableCell>Level 2</TableCell>
            <TableCell><TextField onChange={buyamount2ChangeHandler} id="outlined-number" type="number" InputLabelProps={{shrink: true,}} variant="standard"/></TableCell>
            <TableCell><TextField onChange={buyquantity2ChangeHandler} id="outlined-number" type="number" InputLabelProps={{shrink: true,}} variant="standard"/></TableCell>
            <TableCell><TextField onChange={bidamount2ChangeHandler} id="outlined-number" type="number" InputLabelProps={{shrink: true,}} variant="standard"/></TableCell>
            <TableCell><TextField onChange={bidquantity2ChangeHandler} id="outlined-number" type="number" InputLabelProps={{shrink: true,}} variant="standard"/></TableCell>
          </TableRow>
          :null}
          {level3?
            <TableRow >
            <TableCell>Level 3</TableCell>
            <TableCell><TextField onChange={buyamount3ChangeHandler} id="outlined-number" type="number" InputLabelProps={{shrink: true,}} variant="standard"/></TableCell>
            <TableCell><TextField onChange={buyquantity3ChangeHandler} id="outlined-number" type="number" InputLabelProps={{shrink: true,}} variant="standard"/></TableCell>
            <TableCell><TextField onChange={bidamount3ChangeHandler} id="outlined-number" type="number" InputLabelProps={{shrink: true,}} variant="standard"/></TableCell>
            <TableCell><TextField onChange={bidquantity3ChangeHandler} id="outlined-number" type="number" InputLabelProps={{shrink: true,}} variant="standard"/></TableCell>
          </TableRow>
          :null}
          {level4?
            <TableRow >
            <TableCell>Level 4</TableCell>
            <TableCell><TextField onChange={buyamount4ChangeHandler} id="outlined-number" type="number" InputLabelProps={{shrink: true,}} variant="standard"/></TableCell>
            <TableCell><TextField onChange={buyquantity4ChangeHandler} id="outlined-number" type="number" InputLabelProps={{shrink: true,}} variant="standard"/></TableCell>
            <TableCell><TextField onChange={bidamount4ChangeHandler} id="outlined-number" type="number" InputLabelProps={{shrink: true,}} variant="standard"/></TableCell>
            <TableCell><TextField onChange={bidquantity4ChangeHandler} id="outlined-number" type="number" InputLabelProps={{shrink: true,}} variant="standard"/></TableCell>
          </TableRow>
          :null}
          {level5?
            <TableRow >
            <TableCell>Level 5</TableCell>
            <TableCell><TextField onChange={buyamount5ChangeHandler} id="outlined-number" type="number" InputLabelProps={{shrink: true,}} variant="standard"/></TableCell>
            <TableCell><TextField onChange={buyquantity5ChangeHandler} id="outlined-number" type="number" InputLabelProps={{shrink: true,}} variant="standard"/></TableCell>
            <TableCell><TextField onChange={bidamount5ChangeHandler} id="outlined-number" type="number" InputLabelProps={{shrink: true,}} variant="standard"/></TableCell>
            <TableCell><TextField onChange={bidquantity5ChangeHandler} id="outlined-number" type="number" InputLabelProps={{shrink: true,}} variant="standard"/></TableCell>
          </TableRow>
          :null}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
      </Grid>
    </Paper>
    <div>
      <Stack direction="row" justifyContent="right" >
      <Button onClick={handleClickSubmitticket} className="seller-btn-pos" variant="contained"  >Submit Tickets</Button>
      </Stack>
          </div>
        </DialogContent>
        </DialogContent>
      </Dialog>

    </React.Fragment>
  );
}