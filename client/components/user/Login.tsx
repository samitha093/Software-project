import React from 'react';
import { useRouter } from 'next/router'
import { Typography,Button,TextField,Link,Box,Grid,Stack} from '@mui/material';

interface LoginProps {

}

const Login: React.FC<LoginProps> = ({}) => {

    const router = useRouter()

    const [email,setEmail] = React.useState<string>("");
    const [emailHasError,setEmailError] = React.useState<boolean>(false);
    const [password,setPassword] =React.useState<string>("");
    const [passwordError,setPasswordError] = React.useState<boolean>(false);
    

    const emailChangeHandler = (event:any)=>{
        setEmail(event.target.value);
        const email_regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        const valid = !!event.target.value.match(email_regex);
        setEmailError(!valid);
    }

    const passwordChangeHandler =(event:any)=>{
        setPassword(event.target.value);
        const valid = event.target.value.trim().length >= 5;
        setPasswordError(!valid);
    }
     
    

    const submitForm = (event:any)=>{
        event.preventDefault();
        router.push('/user');
        setPassword("");
        setEmail("");
    }

    return(
      <div >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item xs={7} className = "login_container">
                        <div className="form-wrapper">
                            <Typography className = "head">Sign In</Typography>
                            <form className="pricing-box">
                                {emailHasError && (<p className="error-message"> * Invalid email</p>)}
                                <Stack spacing ={4}>
                                        <TextField
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={emailChangeHandler}
                                            // onBlur={emailBlurHandler}
                                            size = "small"
                                            className="textfield"
                                            required
                                        />
                                    {passwordError && (<p className="error-message"> * Password can not be empty</p>)}
                                        <TextField
                                            type="password"
                                            id="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={passwordChangeHandler}
                                            onBlur={passwordChangeHandler}
                                            // onBlur={emailBlurHandler}
                                            size = "small"
                                            className="textfield"
                                            required
                                        />
                                       
                                </Stack>     
                                        
                                        <div className="already-signup">
                                        <br/><Link href="/user/resetpwd" className = "link">Forgot password ?</Link>
                                        </div>
                                        <Button className = "btnsubmit"
                                                type="submit"
                                                variant="contained"
                                                disabled={emailHasError || passwordError}
                                                onClick={submitForm}
                                                size = "small"
                                        >
                                            Sign In
                                        </Button>
                            </form>
                        </div>
                    </Grid>
                    <Grid item xs={5} >

                        <Box className = "box">
                            <div className="content-1">
                             Welcome Back ! 
                            </div>
                            <br/>
                            <div className= "content-2">
                            Please login with personal info & <br/>
                            Keep connected with us.  
                            </div>
                        
                        </Box>   
                                
                    </Grid>
                            
                </Grid>
            </Box>  
    </div>
  );
}
export default Login;