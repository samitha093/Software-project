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
import Pendingeventinfo from '../../components/manager/Pendingeventinfo'

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

export default function Pendingtickets() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="manager-c-pendingtickets" onClick={handleClickOpen}>
        <div>
          <div className="manager-c-pendingtickets-top">
            


            <div className="manager-c-pendingtickets-top-info">
              <div className="manager-c-pendingtickets-top-info-left">
                <div className="manager-c-pendingtickets-top-info-left-name">
                  Event name
                </div>
                <div className="manager-c-pendingtickets-top-info-left-date">
                  2021-08-23
                </div>
              </div>
              <div className="manager-c-pendingtickets-top-info-right">
                <div className="manager-c-pendingtickets-top-info-right-nooftickets">460</div>
                <div className="manager-c-pendingtickets-top-info-right-tickets">tickets</div>
              </div>
            </div>
          </div>
          <h5 className="manager-c-pendingtickets-cardstatus">Info</h5>
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
          <Pendingeventinfo/>
        </DialogContent>
      </BootstrapDialog>



    </div>
  );
}

/*THIS PART MUST BE IN THE ABOVE DIV SPACES (PRTIALLY ADDED UNTIL I UNDERSTAND THE CODE FULLY)
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
      </BootstrapDialog>*/