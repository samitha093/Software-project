import React from 'react'
import styles from '../dashboard/styles.module.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper';
import ProgressBar from "@ramonak/react-progress-bar";
import axios from 'axios'
import Swal from 'sweetalert2'
import {gethost} from '../../../session/Session'

interface SellingInfoProps {
    data:any;
}

const SellingInfo: React.FC<SellingInfoProps> = ({data}) => {
    const rows = [
        {"id" : "14gsd54a3sfdc", "name":"1", "seller":"Seller1", "revenue":"12,454","p1":1,"p2":120,"p3":"1%","b1":0,"b2":150,'b3':1,"status":"DEACTIVE",},    
        {"id" : "14gsd54e3sfdc", "name":"2", "seller":"Seller1", "revenue":"14,156","p1":190,"p2":1500,"p3":"11%","b1":190,"b2":200,'b3':3, "status":"ACTIVE",},  
        {"id" : "14gsd54a3shdc", "name":"3", "seller":"Seller1", "revenue":"2,456","p1":1,"p2":25000,"p3":"1%","b1":10,"b2":130,'b3':1, "status":"DEACTIVE",},    
        {"id" : "14gsd54a6sfdc","name":"4", "seller":"Seller1", "revenue":"12,476" ,"p1":12000,"p2":45000,"p3":"42%","b1":11,"b2":20,'b3':2, "status":"ACTIVE",},
        {"id" : "14gsd54a6sfdc","name":"5", "seller":"Seller1", "revenue":"12,156","p1":72,"p2":12000,"p3":"1%","b1":30,"b2":12000,'b3':1, "status":"DEACTIVE",},
        {"id" : "14gsd54a6sfdc","name":"6", "seller":"Seller1", "revenue":"22,756","p1":990,"p2":1000,"p3":"99%","b1":50000,"b2":34000,'b3':4, "status":"PENDING",}  
    ];
    const [items, setitem] = React.useState<any[]>([])
    React.useEffect(() => {
        eventdataget();
    }, [])
    const eventdataget = async() => {
        //get access from gatway for 5min
        await axios.get(gethost() + 'a/refreshtoken',{withCredentials:true})
            .then(async (res)=>{
                //create a headet pack
                const config = {
                  headers: { Authorization: `Bearer ${res.data.accesstoken}` }
                };
                axios.get(gethost()+'s/event/ticket/'+data.id,config).then(async (res)=>{
                    setitem(res.data);
                    console.log(res.data)
                  })
                  .catch((err)=>{
                    Swal.fire({
                      icon: 'error',
                      title: 'Authentication Failed',
                      text: 'Please Login to your account',
                      showConfirmButton: false,
                      timer: 2500
                    })
                  })
              //end connection
            })
      };
    return (
        <div className={styles.bg_tabel2}>
            <div className={styles.table_seller_container_2}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Ticket Level</TableCell>
                        <TableCell align="center">No Of Sold Tickets</TableCell>
                        <TableCell align="center">No Of Bids</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {items.map((row) => (
                        <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            Level {row.level}
                        </TableCell>
                        <TableCell align="center">
                            <ProgressBar completed={row.Abuy} maxCompleted={row.buy}  customLabel={row.p3+"%"} labelAlignment="outside" labelColor='#000000'/>
                        </TableCell>
                        <TableCell align="center">
                            <div className={row.b3==1?styles.table_bid_l1:row.b3==2?styles.table_bid_l2:row.b3==3?styles.table_bid_l3:styles.table_bid_l4}>
                            {row.Abids+'/'+row.bid}
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

export default SellingInfo;