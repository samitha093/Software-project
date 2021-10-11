import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PublishIcon from '@mui/icons-material/Publish';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Pendingeventstable from '../../components/manager/Pendingeventstable'


//THIS COMPONENT WILL BE DELETED

export default function PendingEventsInfo() {
  return (
    <Card sx={{ maxWidth: 1300 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="Error event image not found!!!"
      />
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography> Event Name </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography> Organaizer </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography> Venue </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography> Date </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography> Time </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography> Starting Date </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography> Ending Date </Typography>
            </Grid>
            <Grid item xs={12}>
              <Pendingeventstable />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <CardActions>
        <Stack spacing={2} direction="row" className="manager-c-ticketspublishdecline-buttons-stack"  >
          <Button variant="contained" endIcon={<PublishIcon />}>
            Publish
          </Button>
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Decline
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}


