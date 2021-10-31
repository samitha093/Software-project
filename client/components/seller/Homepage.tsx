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
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DialogContentText from '@mui/material/DialogContentText';
import Image from 'next/image'
import remove from '../assets/icons/minus.png'
import add from '../assets/icons/plus.png'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import tick from '../../assets/office-chair.png'
import CreateIcon from '@mui/icons-material/Create';
import {Button} from '@mui/material';
import Paper from '@mui/material/Paper';
import Createevent from '../../components/seller/Createevents'

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
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
        console.log('asd');
    };

    return (
        <div className="seller-index-container">
            <div className ="left-container">
                <div className="text-1" style={{display:'block'}}>
                  <h2 style={{color:'#3b1c4e'}}>Welcome to our Website</h2>
                <div style={{color:'#212121'}}> About</div>
            </div>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <Item>Full Name</Item>
        </Grid>
        <Grid item xs={7}>
          <Item>sdbfhsgb</Item>
        </Grid>
        <Grid item xs={5}>
          <Item>Email</Item>
        </Grid>
        <Grid item xs={7}>
          <Item>sfbsuhgubsvf</Item>
        </Grid>
        <Grid item xs={5}>
          <Item>Contact Number</Item>
        </Grid>
        <Grid item xs={7}>
          <Item>32154644848</Item>
        </Grid>
      </Grid>
    </Box>
    <div>
    <Createevent/>
    </div>
            </div>
            <div className ="right-container">
            <Image
              src = {tick}
              layout = "responsive"
              m-50
            ></Image>   
        </div>
    </div>
  );
}

export default Homepage;