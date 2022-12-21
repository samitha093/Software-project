import React from 'react'
import styles from './styles.module.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper';
import ProgressBar from "@ramonak/react-progress-bar";
import axios from 'axios';
import Swal from 'sweetalert2'
import {gethost} from '../../../session/Session';

interface TabelProps {
    data:any
}

const Tabel: React.FC<TabelProps> = ({data}) => {
    const [items, setitem] = React.useState<any[]>([])
    React.useEffect(()=>{
        axios.get(gethost() + 'a/refreshtoken',{withCredentials:true}).then(async (res)=>{
          //create a headet pack
          const config = {
            headers: { Authorization: `Bearer ${res.data.accesstoken}` }
          };
          await axios.get(gethost() + 's/getdashboard',config).then(async (res)=>{
            // console.log(res.data.dataset1);
            setitem(res.data.dataset6);
            //console.log(res.data.dataset6)
          })
        })
        .catch((err)=>{
          Swal.fire({
            icon: 'error',
            title: 'Authentication Failed',
            text: err,
            showConfirmButton: false,
            timer: 2500
          })
        })
      },[])
    return (
        <div className={styles.bg_tabel}>
            <div className={styles.table_seller_container}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Event Name</TableCell>
                        <TableCell align="right">Ticket level</TableCell>
                        <TableCell align="center">Total Revenue</TableCell>
                        <TableCell align="center">No Of Sold Tickets</TableCell>
                        <TableCell align="center">No Of Bids</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {items.map((row) => (
                        <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.level}</TableCell>
                        <TableCell align="center">
                            LKR {row.revenue}
                        </TableCell>
                        <TableCell align="center">
                            <ProgressBar completed={row.p1} maxCompleted={row.p2}  customLabel={row.p3} labelAlignment="outside" labelColor='#000000'/>
                        </TableCell>
                        <TableCell align="center">
                            <div className={row.b3==1?styles.table_bid_l1:row.b3==2?styles.table_bid_l2:row.b3==3?styles.table_bid_l3:styles.table_bid_l4}>
                            {row.b1+'/'+row.b2}
                            </div>
                        </TableCell>
                        <TableCell align="center">
                            <div className={styles.table_seller_action}>
                                {row.status === "DEACTIVE"?
                                <div className={styles.table_seller_action_activate}>Activate</div>
                                :
                                <div className={styles.table_seller_action_deactivate}>Deactivate</div>
                                }
                            </div>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </div>
        </div>
    );
}

export default Tabel;