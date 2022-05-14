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
import { PieChart, Pie } from 'recharts';
import Progressbar from '../../components/manager/Progressbar'

import styles from './styles.module.css'
import classnames from 'classnames';

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
        return { level, fixprice, fquantity, bidprice, bquantity };
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

const Homepage: React.FC<HomepageProps> = ({ }) => {
    const data1 = [
        {
            date: '1',
            Revenue: 4000,
        },
        {
            date: '2',
            Revenue: 3000,
        },
        {
            date: '3',
            Revenue: 2000,
        },
        {
            date: '4',
            Revenue: 2780,
        },
        {
            date: '5',
            Revenue: 1890,
        },
        {
            date: '6',
            Revenue: 2390,
        },
        {
            date: '7',
            Revenue: 3490,
        },
    ];

    const data2 = [
        {
            bidstatus: 'Paid',
            numbids: 50,
        },

        {
            bidstatus: 'Unpaid',
            numbids: 40,
        },
    ];


    return (
        <div className={styles.manager_dashboard}>
            <div className={styles.dashboardtop}>
                <div className={styles.dashboardItem}>
                    <div>
                        <span className={styles.dashboardTitle}>Active Events</span>
                        <div className={styles.dashboardContainer}>
                            <span className={styles.dashboardMoney}>15</span>
                            <span className={styles.dashboardRate}>
                                42
                            </span>
                        </div>
                        <span className={styles.dashboardSub}>Compared to Total Events</span>
                    </div>
                    <div className={styles.manager_progressbar}>
                        <Progressbar />
                    </div>
                </div>
                <div className={styles.dashboardItem}>
                    <div>
                        <span className={styles.dashboardTitle}>Pending Bids</span>
                        <div className={styles.dashboardContainer}>
                            <span className={styles.dashboardMoney}>16</span>
                            <span className={styles.dashboardRate}>
                                35
                            </span>
                        </div>
                        <span className={styles.dashboardSub}>Compared to Total Bids</span>
                    </div>
                    <div className={styles.manager_progressbar}>
                        <Progressbar />
                    </div>
                </div>
                <div className={styles.dashboardItem}>
                    <div>
                        <span className={styles.dashboardTitle}>Total Sold Tickets</span>
                        <div className={styles.dashboardContainer}>
                            <span id="dashboardMoney-f" className={styles.dashboardMoney}>578</span>
                            <span className={styles.dashboardRate}>
                                <ArrowUpwardIcon className={styles.dashboardIcon_up} />
                                <ArrowDownwardIcon className={styles.dashboardIcon_down} />
                            </span>
                        </div>
                        <span className={styles.dashboardSub}>Compared to Lastweek</span>
                    </div>
                </div>
                <div className={styles.dashboardItem}>
                    <div>
                        <span className={styles.dashboardTitle}>Total Revenue</span>
                        <div className={styles.dashboardContainer}>
                            <span id="dashboardMoney-f" className={styles.dashboardMoney}>LKR2578</span>
                            <span className={styles.dashboardRate}>
                                <ArrowUpwardIcon className={styles.dashboardIcon_up} />
                                <ArrowDownwardIcon className={styles.dashboardIcon_down} />
                            </span>
                        </div>
                        <span className={styles.dashboardSub}>Compared to Lastweek</span>
                    </div>
                </div>
            </div>
            <div className={styles.dashboardgraph}>
                <h3 className={styles.chartTitle}>Revenue Analytics</h3>
                <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <LineChart data={data1}>
                        <XAxis dataKey="date" stroke="#5550bd" />
                        <Line type="monotone" dataKey="Revenue" stroke="#2ECC71" />
                        <Tooltip />
                        <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className={styles.dashboardgraph}>
                <h3 className={styles.chartTitle}>Bids Analytics</h3>
                <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <PieChart width={730} height={250}>
                        <Pie data={data2} dataKey="numbids" nameKey="numbids" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label />
                        <Tooltip/>
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className={styles.dashboardtable}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={styles.manager_homepage_table} id="customized-dialog-title">Ticket Level</TableCell>
                                <TableCell className={styles.manager_homepage_table} id="customized-dialog-title" align="right">Fix Price&nbsp;(Rs)</TableCell>
                                <TableCell className={styles.manager_homepage_table} id="customized-dialog-title" align="right">Quantity</TableCell>
                                <TableCell className={styles.manager_homepage_table} id="customized-dialog-title" align="right">Bid Price&nbsp;(Rs)</TableCell>
                                <TableCell className={styles.manager_homepage_table} id="customized-dialog-title" align="right">Quantity</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Homepage;