import React from 'react'
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
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import axios from 'axios'
import DialogActions from '@mui/material/DialogActions';
import {gethost} from '../../../session/Session'
import Swal from 'sweetalert2'
import Styles from './styles.module.scss'

interface EventInfoProps {
    data:any,
}

const EventInfo: React.FC<EventInfoProps> = ({data}) => {
    const [items, setitem] = React.useState<any[]>([])
    React.useEffect(()=>{
      setitem(data.tickets);
      console.log(data)
    },[])

    function createData(
        level: any,
        fixprice: any,
        fquantity: any,
        bidprice: any,
        bquantity: any,
      ) {
        return { level, fixprice, fquantity, bidprice, bquantity};
      }

    const rows = items.map((item)=>(
        createData(item.ticket_level,item.buy_amount, item.buy_quantity, item.min_bid_amount, item.bid_quantity,)
    ));
    
    return (
        <div className={Styles.bg}>
            <Grid sx={{ maxWidth: 1 }}>
                <Grid margin-top="20px">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid  className={Styles.seller_eventinfo_font} container spacing={1}>
                            <Grid item xs={6}>
                                <Typography> Organaizer: {data.username}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography> Venue: {data.event_venue}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography> Date: {data.event_date}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography> Time: {data.event_time}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography> Starting Date: {data.publishevent_date}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography> Ending Date: {data.endevent_date}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography> Ending Status: {data.status}</Typography>
                            </Grid>
                        </Grid>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 400 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell id={Styles.customized_dialog_title1}>Ticket Level</TableCell>
                                        <TableCell id={Styles.customized_dialog_title1} align="right">Fix Price&nbsp;(Rs)</TableCell>
                                        <TableCell id={Styles.customized_dialog_title1} align="right">Quantity</TableCell>
                                        <TableCell id={Styles.customized_dialog_title1} align="right">Bid Price&nbsp;(Rs)</TableCell>
                                        <TableCell id={Styles.customized_dialog_title1} align="right">Quantity</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>{rows.map((row) => (
                                    <TableRow key={row.level} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">Level : {row.level}</TableCell>
                                        <TableCell align="right">{row.fixprice}</TableCell>
                                        <TableCell align="right">{row.fquantity}</TableCell>
                                        <TableCell align="right">{row.bidprice}</TableCell>
                                        <TableCell align="right">{row.bquantity}</TableCell>
                                    </TableRow>))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default EventInfo;