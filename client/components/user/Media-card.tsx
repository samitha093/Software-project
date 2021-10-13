import React from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import{Card,CardContent,CardMedia, CardActions,Typography} from '@mui/material'
   
interface cardProps {
    image: string;
    title: string;
    description: string;
     
}

const Mediacard: React.FC<cardProps> = ({image,title,description}) => {
   
    return(
        <Card className = "root">
              <CardMedia
              className ="media"
              image = {image}
              >
              </CardMedia>
              <CardContent>
                  <Typography variant = "h6" fontWeight="bold" color="GrayText">
                        {title}
                  </Typography>
  
                  <Typography paragraph fontSize ={14} color="grey">
                      {description}
                  </Typography>
              
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
             </CardActions> 
        </Card>
        );
    }
export default Mediacard;