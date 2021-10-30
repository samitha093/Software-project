import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import PendingEvents from '../manager/Pendingtickets';
import { dividerClasses } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image'
import remove from '../assets/icons/minus.png'
import add from '../assets/icons/plus.png'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
interface PendingeventProps {

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

const Pendingevents: React.FC<PendingeventProps> = ({}) => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
        console.log('asd');
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div  className="seller-c-pendingevents" onClick={handleClickOpen}>
                <div>
                    <div  className="seller-c-pendingevents-top">
                        <div className="seller-c-pendingevents-top-info">
                            <div className="seller-c-pendingevents-top-info-left">
                                <div className="seller-c-pendingevents-top-info-left-name">
                                    Event name
                                </div>
                                <div className="seller-c-pendingevents-top-info-left-date">
                                    2021-08-23
                                </div>
                            </div>
                            <div className="seller-c-pendingevents-top-info-right">
                                <div className="seller-c-pendingevents-top-info-right-nooftickets">460</div>
                                <div className="seller-c-pendingevents-top-info-right-tickets">tickets</div>
                            </div>
                        </div>
                    </div>
                    <h5 className="seller-c-pendingevents-cardstatus">Info</h5 >
                </div>
            </div>
            <BootstrapDialog 
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Pending Event
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="ticketview">
            <h1>Evante Name - Evante Name Evante Name</h1>  
          </div>
          <div className='ticketview-data'>
            <div>Event Venue : jhfhshhashkashghlkhLKHFS</div>
            <div>Event Date : 2021 JAN 23</div>
            <div>Event Time :  07 : 00 pm</div>
            <div>Ticket Type :  LEVEL 1</div>
            <div>
                <div>Fix Price : Rs.900 </div>
                <div>Bid Price : Rs.850 </div>
            </div>
            <div>Ticket Type :  LEVEL 2</div>
            <div>
                <div>Fix Price : Rs.800 </div>
                <div>   Bid Price : Rs.750 </div>
            </div>
            <div>Ticket Type :  LEVEL 3</div>
            <div>
                <div>Fix Price : Rs.700 </div>
                <div>Bid Price : Rs.650 </div>
            </div>
            <div>Ticket Type :  LEVEL 4</div>
            <div>
                <div>Fix Price : Rs.600 </div>
                <div>Bid Price : Rs.550 </div>
            </div>
            <div>Ticket Type :  LEVEL 5</div>
            <div>
                <div>Fix Price : Rs.400 </div>
                <div>Bid Price : Rs.350 </div>
            </div>
          </div>
          <div className='ticketview-price-btn'>
            Delete Event
          </div>
        </DialogContent>
      </BootstrapDialog>
            
        </div>
    );
}

export default Pendingevents;