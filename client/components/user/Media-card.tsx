import React from 'react';
import { makeStyles } from '@mui/styles';
import{Card, CardActionArea,CardActions,CardContent,CardMedia, Typography} from '@mui/material'

const useStyles = makeStyles({
    root:{
        maxWidth:500,
    },
   media:{
        height: 300,
   },     
   
   });
   
interface cardProps {
    image: string;
    title: string;
    description: string;

}

const Mediacard: React.FC<cardProps> = ({image,title,description}) => {
    const classes = useStyles();
    return(
        <Card className = {classes.root}>
            <CardActionArea>
              <CardMedia
              className ={classes.media}
              image = {image}
              title = {title}
              >
              </CardMedia>
              <CardContent>
                  <Typography>
                      {description}
                  </Typography>
                  
            </CardContent>

            </CardActionArea>
        </Card>

        );



    }
export default Mediacard;