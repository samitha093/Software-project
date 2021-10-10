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

export default function PendingEventsInfo() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography> xd8 </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography> xd4 </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography> xd4 </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography> xd8 </Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <CardActions>
        <Stack spacing={2} direction="row" className="manager-c-pendingticketsinfo-buttons-stack"  >
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


