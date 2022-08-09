import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper';
import styles from './styles.module.scss'
import ProgressBar from "@ramonak/react-progress-bar";

interface EventlistProps {
    data:any
}

const Eventlist: React.FC<EventlistProps> = ({data}) => {
    const [items, setitem] = React.useState<any[]>([])
    React.useEffect(() => {
        setitem(data);
        }, [])
    return (
        <div className={styles.eventlistbg}>
                    <div className={styles.table_seller_container}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Event Name</TableCell>
                        <TableCell align="right">Seller</TableCell>
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
                        <TableCell align="right">{row.seller}</TableCell>
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

export default Eventlist;