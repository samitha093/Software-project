import React from 'react'
import { Typography,Button,TextField, Container,Link } from '@mui/material';
import Box from '@mui/material/Box';
interface LoginProps {

}
const Login: React.FC<LoginProps> = ({}) => {

  return(
    <div className = "login_container">
        <Typography className = "head">Sign In</Typography> 
        <TextField className ="textfield"
          required
          id="email"
          label="Email"
          size = "small"
        />
        <TextField className = "textfield"
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          size = "small"
        />
        <Link href="#" className = "link">
          Forgot password?
        </Link>
        <Link href="#" className = "link">
          New to TickBid ? Sign Up here
        </Link>
        <Button className = "btnsubmit"
          type="submit"         
          variant="contained"      
        >
          Sign In
        </Button>
    </div>

    <div className = "right-overlay">

    </div>   
  );


}
export default Login;