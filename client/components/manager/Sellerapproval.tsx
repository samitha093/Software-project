import * as React from 'react';
import Dialog from '@mui/material/Dialog';
//import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

import Sellerapprovaltable from '../../components/manager/Sellerapprovaltable'


export default function SellerApproval() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab variant="extended" onClick={handleClickOpen} size="medium" color="primary" aria-label="add">
        <NavigationIcon sx={{ mr: 1 }} />
        Approve Sellers
      </Fab>
      
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" className="manager-c-ticketsinfo-top-head-right">
          {"Approve Sellers"}
        </DialogTitle>
        <DialogContent>
          <Sellerapprovaltable/>
        </DialogContent>
      </Dialog>
    </div>
  );
}