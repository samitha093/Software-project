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

export default function Popup() {
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
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}