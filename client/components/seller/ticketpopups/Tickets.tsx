import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper';
import styles from '../../manager/tables/styles.module.scss'
import Swal from 'sweetalert2'
import axios from 'axios'

interface TicketsProps {

}

const Tickets: React.FC<TicketsProps> = ({}) => {
    const [items, setitem] = React.useState<any[]>([]);
    const rows = [    
        {"id" : "14gsd54a3sfdc", "name":"name test", "email":"mail@mail.com", "type":"BUYER", "status":"VALIDATED",},    
        {"id" : "14gsd54a3sfdc", "name":"name test", "email":"mail@mail.com", "type":"GUEST", "status":"ACTIVE",},   
        {"id" : "14gsd54a3sfdc", "name":"name test", "email":"mail@mail.com", "type":"BUYER", "status":"SUSPEND",},   
        {"id" : "14gsd54a3sfdc", "name":"name test", "email":"mail@mail.com", "type":"GUEST", "status":"VALIDATED",},   
        {"id" : "14gsd54a3sfdc", "name":"name test", "email":"mail@mail.com", "type":"BUYER", "status":"ACTIVE",},   
      
    ];

    React.useEffect(() => {
        setitem(rows);
        }, [])
    return (
        <div className={styles.table_seller_container2}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>User Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="center">User Type</TableCell>
                        <TableCell align="center">Ticket Satus</TableCell>
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
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">
                            {row.type === "BUYER"?
                            <div className={styles.table_seller_type_buyer}>
                                {row.type}
                            </div>
                            :
                            <div className={styles.table_seller_type_seller}>
                                {row.type}
                            </div>
                            }
                            
                            
                        </TableCell>
                        <TableCell align="right">
                            {row.status === 'VALIDATED'?
                            <div className={styles.table_seller_status_pending}>
                                {row.status}
                            </div>
                            :null}
                            
                            {row.status === 'ACTIVE'?
                            <div className={styles.table_seller_status_active}>
                                {row.status}
                            </div>
                            :null}
                            
                            {row.status ==='SUSPEND'?
                            <div className={styles.table_seller_status_deactive}>
                                {row.status}
                            </div>
                            :null}
                            
                        </TableCell>
                        <TableCell>
                            <div className={styles.table_seller_action}>
                                {row.status == "SUSPEND"?
                                <div className={styles.table_seller_action_activate} >Activate</div>
                                :
                                null
                                }
                                {row.status == "ACTIVE"?
                                <div className={styles.table_seller_action_deactivate} >Deactivate</div>
                                :
                                null
                                }
                            </div>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </div>
    );
}

export default Tickets;