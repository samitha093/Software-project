import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper';
import styles from './styles.module.scss'
import Swal from 'sweetalert2'
import axios from 'axios'
//Session and local storage data
import { gethost } from '../../../session/Session';

interface SellerProps {
 data:any
 refresh:any
}
 
async function PopupConfirm(data:any, refresh:any){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, activate this seller!'
      }).then((result) => {
        if (result.isConfirmed) {
            axios.get(gethost() + 'a/refreshtoken', { withCredentials: true }).then(async (res) => {
                const config = {
                    headers: { Authorization: `Bearer ${res.data.accesstoken}` }
                };
                const datapack = {
                    id: data,
                    status:true,
                    suspendstatus:false
                };
                axios.post(gethost() +'m/Useractivate',datapack ,config).then(async (res) => {
                    refresh.change(res.data);
                })
                    .catch(() => {
                        Swal.fire(
                            'Activated!',
                            'New seller has been activated.',
                            'success'
                          )
                    })
            })
            .catch((err) => { })
        }
      })
  }

  async function PopupDeactivation(data:any, refresh:any){
    Swal.fire({
        title: 'Are you sure?',
        text: "Once you deactiveted, you can activate again if need!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, deactivate this seller!'
      }).then((result) => {
        if (result.isConfirmed) {
            if (result.isConfirmed) {
                axios.get(gethost() + 'a/refreshtoken', { withCredentials: true }).then(async (res) => {
                    const config = {
                        headers: { Authorization: `Bearer ${res.data.accesstoken}` }
                    };
                    const datapack = {
                        id: data,
                        status:true,
                        suspendstatus:true
                    };
                    axios.post(gethost() +'m/Useractivate',datapack ,config).then(async (res) => {
                        refresh.change(res.data);
                    })
                        .catch(() => {
                            Swal.fire(
                                'Deactivated!',
                                'this seller has been Deactivated.',
                                'success'
                              )
                        })
                })
                .catch((err) => { })
            }

          
        }
      })
  }

const Seller: React.FC<SellerProps> = ({data,refresh}) => {
    const [items, setitem] = React.useState<any[]>([])

    React.useEffect(() => {
        setitem(data);
        }, [data])
    return (
        <div className={styles.table_seller_container}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>User Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="center">User Type</TableCell>
                        <TableCell align="center">User Satus</TableCell>
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
                            {row.username}
                        </TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">
                            {row.usertype === "BUYER"?
                            <div className={styles.table_seller_type_buyer}>
                                {row.usertype}
                            </div>
                            :
                            <div className={styles.table_seller_type_seller}>
                                {row.usertype}
                            </div>
                            }
                            
                            
                        </TableCell>
                        <TableCell align="right">
                            {(row.status == false)&&(row.suspendstatus == false )&& row.otp == 'verified'?
                            <div className={styles.table_seller_status_pending}>
                                PENDING
                            </div>
                            :null}
                            
                            {(row.status == true)&&(row.suspendstatus == false)&& row.otp == 'verified'?
                            <div className={styles.table_seller_status_active}>
                                ACTIVE
                            </div>
                            :null}
                            
                            {row.suspendstatus == true && row.otp == 'verified'?
                            <div className={styles.table_seller_status_deactive}>
                                SUSPENDED
                            </div>
                            :null}

                            {row.otp == 'unverified'?
                            <div className={styles.table_seller_status_unverified}>
                                UNVERIFIED
                            </div>
                            :null}
                            
                        </TableCell>
                        <TableCell>
                            <div className={styles.table_seller_action}>
                                <div className={styles.table_seller_action_verify}>Re-verification</div>
                                {(row.suspendstatus == true)||row.status == false?
                                <div className={styles.table_seller_action_activate} onClick={(e)=>PopupConfirm(row.id,refresh)}>Activate</div>
                                :
                                <div className={styles.table_seller_action_deactivate} onClick={(e)=>PopupDeactivation(row.id,refresh)}>Deactivate</div>
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

export default Seller;