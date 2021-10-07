import React from 'react'
import { Typography,Button,TextField, Container,Link } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface RegisterProps {

}

const Register: React.FC<RegisterProps> = ({}) => {
        return (
            <div className = "register-container">
<Typography className = "head">Sign Up</Typography> 
        
        <TextField className = "textfield"
          id="name"
          label="Name"
          size = "small"
        />
        <TextField className ="textfield"
          required
          id="email"
          label="Email"
          size = "small"
        />
        <TextField className = "textfield"
          required
          id="contact"
          label="Contact Number"   
          size = "small"
        />
        <TextField className = "textfield"
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          size = "small"
        />
         <FormControl component="fieldset">
                <FormLabel component="legend">You are here as</FormLabel>
                <RadioGroup row aria-label="You are here as" name="row-radio-buttons-group">
                    <FormControlLabel size = "small" value="buyer" control={<Radio />} label="Buyer" />
                    <FormControlLabel value="seller" control={<Radio />} label="Ticket Seller" />
                    <FormControlLabel value="manager" control={<Radio />} label="Manager" />
                    
                </RadioGroup>
        </FormControl>
        

        <Button className = "btnsubmit"
          type="submit"         
          variant="contained"      
        >
          Sign Up
        </Button>


            </div>

            
        );
}

export default Register;