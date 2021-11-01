import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

interface CreateeventProps {

}

function createData(
  name: string
) {
  return { name };
}

const rows = [
  createData('Level 1'),
  createData('Level 2'),
  createData('Level 3'),
  createData('Level 4'),
  createData('Level 5'),
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment >
      <div onClick={handleClickOpen}>
      <Stack direction="row">
      <Button variant="contained"  >Submit Event & Next</Button>
      </Stack>
          </div>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Create Tickets
        </BootstrapDialogTitle>
        <DialogContent>
        <DialogContent dividers>
        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 1500, flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ButtonBase sx={{ width: 200, height: 150 }}>
            <Img alt="complex" src="/assets/office-chair.png" />
          </ButtonBase>
        </Grid>
        <Grid item xs={8} sm container>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>
              <div>
              <TextField
          id="standard-number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
      </div>
              </TableCell>
              <TableCell>
              <div>
              <TextField
          id="standard-number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
      </div>
              </TableCell>
              <TableCell>
              <div>
              <TextField
          id="standard-number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
      </div>
              </TableCell>
              <TableCell>
              <div>
              <TextField
          id="standard-number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
      </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
      </Grid>
    </Paper>
    <div onClick={handleClickOpen}>
      <Stack direction="row">
      <Button variant="contained"  >Submit Tickets</Button>
      </Stack>
          </div>
        </DialogContent>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}