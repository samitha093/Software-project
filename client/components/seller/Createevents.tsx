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

  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
        onClose={handleClose}
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
        />
        <TextField
          id="outlined-required"
          label="Event Venue"
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
    <div>
    <Createtickets/>
    </div>
    
        </DialogContent>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}