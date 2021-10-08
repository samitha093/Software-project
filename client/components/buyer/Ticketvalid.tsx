import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Ticket from '../../components/buyer/Ticket'

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

export default function Ticketvalid() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <div className="buyer-c-ticketvalid" onClick={handleClickOpen}>
            <div>
                <div className="buyer-c-ticketvalid-top">
                    <div className="buyer-c-ticketvalid-top-head">
                        <div className="buyer-c-ticketvalid-top-head-left">
                            13:30:00
                        </div>
                        <div className="buyer-c-ticketvalid-top-head-right">
                            <div className="buyer-c-ticketvalid-top-head-right-1">
                                Level
                            </div>
                            <div className="buyer-c-ticketvalid-top-head-right-2">
                                2
                            </div>
                        </div>
                    </div>
                    <div className="buyer-c-ticketvalid-top-info">
                        <div className="buyer-c-ticketvalid-top-info-left">
                            <div className="buyer-c-ticketvalid-top-info-left-name">
                                Event name
                            </div>
                            <div className="buyer-c-ticketvalid-top-info-left-date">
                                2021-08-23
                            </div>
                        </div>
                        <div className="buyer-c-ticketvalid-top-info-right">
                            <div className="buyer-c-ticketvalid-top-info-right-nooftickets">460</div>
                            <div className="buyer-c-ticketvalid-top-info-right-tickets">tickets</div>
                        </div>
                    </div>
                </div>
                <h5 className="buyer-c-ticketvalid-cardstatus">card status</h5>
            </div>
        </div>


      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Event name
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Ticket id="123456 654321 345678 34567 987678"/>
          <Ticket id="766756 343545 766688 67678 876668"/>
          <Ticket id="464666 776766 765757 86868 787686"/>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
