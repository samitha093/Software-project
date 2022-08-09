import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Progressbar from '../../components/seller/Progressbar'
import Styles from './Styles.module.css'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

interface HomepageProps {

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

    function createData(
      level: any,
      fixprice: any,
      fquantity: any,
      bidprice: any,
      bquantity: any,
    ) {
      return { level, fixprice, fquantity, bidprice, bquantity};
    }
    
    /*const rows = items.map((item)=>(
        createData(item.ticket_level,item.buy_amount, item.buy_quantity, item.bid_amount, item.bid_quantity,)
      ));*/

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

const Homepage: React.FC<HomepageProps> = ({}) => {
  const data = [
    {
      date: '1',
      Sales: 4000,
      Returns: 2400,
    },
    {
      date: '2',
      Sales: 3000,
      Returns: 1398,
    },
    {
      date: '3',
      Sales: 2000,
      Returns: 9800,
    },
    {
      date: '4',
      Sales: 2780,
      Returns: 3908,
    },
    {
      date: '5',
      Sales: 1890,
      Returns: 4800,
    },
    {
      date: '6',
      Sales: 2390,
      Returns: 3800,
    },
    {
      date: '7',
      Sales: 3490,
      Returns: 4300,
    },
    {
        date: '8',
        Sales: 4000,
        Returns: 2400,
      },
      {
        date: '9',
        Sales: 3000,
        Returns: 1398,
      },
      {
        date: '10',
        Sales: 2000,
        Returns: 9800,
      },
      {
        date: '11',
        Sales: 2780,
        Returns: 3908,
      },
      {
        date: '12',
        Sales: 1890,
        Returns: 4800,
      },
      {
        date: '13',
        Sales: 2390,
        Returns: 3800,
      },
      {
        date: '14',
        Sales: 3490,
        Returns: 4300,
      },
      {
        date: '15',
        Sales: 4000,
        Returns: 2400,
      },
      {
        date: '16',
        Sales: 3000,
        Returns: 1398,
      },
      {
        date: '17',
        Sales: 2000,
        Returns: 9800,
      },
      {
        date: '1',
        Sales: 2780,
        Returns: 3908,
      },
      {
        date: '18',
        Sales: 1890,
        Returns: 4800,
      },
      {
        date: '19',
        Sales: 2390,
        Returns: 3800,
      },
      {
        date: '20',
        Sales: 3490,
        Returns: 4300,
      },
  ];
  

return (
    <div className={Styles.seller_dashboard}>
        <div className={Styles.dashboardtop}>
            <div className ={Styles.dashboardItem}>
              <div>
              <span className={Styles.dashboardTitle}>No. of Sales</span>
                <div className ={Styles.dashboardContainer}>
                    <span className={Styles.dashboardMoney}>15</span>
                    <span className={Styles.dashboardRate}>
                        90 
                    </span>
                </div>
                <span className={Styles.dashboardSub}>Compared to tickets</span>
              </div>
              <div className={Styles.seller_progressbar}>
                <Progressbar/>
              </div>
            </div>
            <div className ={Styles.dashboardItem}>
              <div>
                <span className={Styles.dashboardTitle}>No. of Bids</span>
                <div className ={Styles.dashboardContainer}>
                    <span className={Styles.dashboardMoney}>8</span>
                    <span className={Styles.dashboardRate}>
                        35 
                    </span>
                </div>
                <span className={Styles.dashboardSub}>Compared to available</span>
              </div>
              <div className={Styles.seller_progressbar}>
                <Progressbar/>
              </div>
            </div>
            <div className ={Styles.dashboardItem}>
              <div>
                <span className={Styles.dashboardTitle}>Revanue</span>
                <div className ={Styles.dashboardContainer}>
                    <span id="dashboardMoney-f" className={Styles.dashboardMoney}>LKR2578</span>
                    <span className={Styles.dashboardRate}>
                      <ArrowUpwardIcon className={Styles.dashboardIcon_up}/>
                      <ArrowDownwardIcon className={Styles.dashboardIcon_down}/>
                    </span>
                </div>
                <span className={Styles.dashboardSub}>Compared to yesterday</span>
              </div>
                <div className={Styles.seller_progressbar}>
                <Progressbar/>
              </div>
            </div>
       </div>
       <div className={Styles.dashboardgraph}>
            <h3 className={Styles.chartTitle}>Sales Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="date" stroke="#5550bd"/>
                    <Line type="monotone" dataKey="Sales" stroke="#2ECC71"/>
                    <Line type="monotone" dataKey="Returns" stroke="#E67E22"/>
                    <Tooltip/>
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
                </LineChart>
            </ResponsiveContainer>
       </div>
       <div className={Styles.dashboardtable}>
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
      </Table>
    </TableContainer>
       </div>
    </div>
)
}

export default Homepage;