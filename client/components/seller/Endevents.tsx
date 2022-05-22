import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import {gethost} from '../../session/Session'
import Styles from './Styles.module.css'
import Swal from 'sweetalert2'

interface EndeventProps {
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

const Endevents: React.FC<EndeventProps> = ({data}) => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [items, setitem] = React.useState<any[]>([])
    React.useEffect(()=>{
      axios.get(gethost()+'seller/details/'+data.id)
      .then(async (res)=>{
        await setitem(res.data)
      })
      .catch(()=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Database connection error!'
          })
        }
      )  
    },[])

    function createData(
      level: any,
      fixprice: any,
      fquantity: any,
      fsold: any,
      bidprice: any,
      bquantity: any,
      availablebid: any,
    ) {
      return { level, fixprice, fquantity, fsold, bidprice, bquantity, availablebid};
    }
    
    const rows = items.map((item)=>(
        createData(item.ticket_level, item.buy_amount, item.buy_quantity, item.sold, item.bid_amount, item.bid_quantity, item.bid_count)
      ));

    return (
        <div>
            <div className={Styles.seller_c_tickets} onClick={handleClickOpen}>
                <div>
                    <div className={Styles.seller_c_tickets_top}>
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
                                <div className={Styles.seller_c_tickets_top_info_right_nooftickets}>460</div>
                                <div className={Styles.seller_c_tickets_top_info_right_tickets}>tickets</div>
                            </div>
                        </div>
                    </div>
                    <h5 className={Styles.seller_c_tickets_cardstatus}>Info</h5>
                </div>
            </div>
            <BootstrapDialog 
        aria-labelledby={Styles.customized_dialog_title1}
        open={open}
      >
        <BootstrapDialogTitle id={Styles.customized_dialog_title1} onClose={handleClose}>
          End Event
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className={Styles.ticketview}>
            <h1>{data.event_name}</h1>  
          </div>  
          <Grid sx={{ maxWidth: 480 }}>
            <Grid margin-top="20px">
              <Box sx={{ flexGrow: 1 }}>
                <Grid  className={Styles.seller_eventinfo_font} container spacing={1}>
                  <Grid item xs={6}>
                    <Typography> Event Venue : {data.event_venue}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                     <Typography> Event Date : {data.event_date}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography> Event Time : {data.event_time}</Typography>
                  </Grid>
                </Grid>
                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell id={Styles.customized_dialog_title1}>Ticket Level</TableCell>
            <TableCell id={Styles.customized_dialog_title1} align="right">Fix Price&nbsp;(Rs)</TableCell>
            <TableCell id={Styles.customized_dialog_title1} align="right">FSell</TableCell>
            <TableCell id={Styles.customized_dialog_title1} align="right">FSold</TableCell>
            <TableCell id={Styles.customized_dialog_title1} align="right">Bid Price&nbsp;(Rs)</TableCell>
            <TableCell id={Styles.customized_dialog_title1} align="right">Total Bid</TableCell>
            <TableCell id={Styles.customized_dialog_title1} align="right">Available Bid</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.level}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.level}
              </TableCell>
              <TableCell align="right">{row.fixprice}</TableCell>
              <TableCell align="right">{row.fquantity}</TableCell>
              <TableCell align="right">{row.fsold}</TableCell>
              <TableCell align="right">{row.bidprice}</TableCell>
              <TableCell align="right">{row.bquantity}</TableCell>
              <TableCell align="right">{row.availablebid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </BootstrapDialog>       
    </div>
  );
}

export default Endevents;