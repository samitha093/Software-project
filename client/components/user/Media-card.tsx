import React from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import{Card,CardContent,CardMedia, CardActions,Typography} from '@mui/material'
import { height } from '@mui/system';
   
interface cardProps {
    image: string;
    title: string;
    description: string;
     
}

const Mediacard: React.FC<cardProps> = ({image,title,description}) => {
   
    return(
        <Card className = "root">
              <CardMedia
              style ={{height:400}}
              component = "img"
              image={image}
              
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