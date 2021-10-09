import React from 'react';
import { useRouter } from 'next/router'
import { Typography,Button,TextField, Container,Link } from '@mui/material';
import Box from '@mui/material/Box';


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
<<<<<<< HEAD
=======


>>>>>>> 780d4b4c7541ca7e51d2a0e1f35d06e04a145293
    }

    const passwordChangeHandler =(event:any)=>{
        setPassword(event.target.value);
        const valid = event.target.value.trim().length >= 5;
        setPasswordError(!valid);
<<<<<<< HEAD
=======


>>>>>>> 780d4b4c7541ca7e51d2a0e1f35d06e04a145293
    }

    const submitForm = (event:any)=>{
        event.preventDefault();
        router.push('/user');
        setPassword("");
        setEmail("");
    }

    return(
    <div className = "login_container">

        <div className="form-wrapper">
            <Typography className = "head">Sign In</Typography>
            <form className="pricing-box">
                {emailHasError && (<p className="error-message"> * Invalid email</p>)}
                    <TextField
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={emailChangeHandler}
                        // onBlur={emailBlurHandler}
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
                        className="textfield"
                        required
                    />

                    <Link href="#" className = "link">
                      Forgot password?
                    </Link>
                    <Link href="/user/register" className = "link">
                      New to TickBid ? Sign Up here
                    </Link>


                    <Button className = "btnsubmit"
                            type="submit"
                            variant="contained"
                            disabled={emailHasError || passwordError}
                            onClick={submitForm}
                    >
                        Sign In
                    </Button>

            </form>
        </div>
<<<<<<< HEAD
        </div>
=======
>>>>>>> 780d4b4c7541ca7e51d2a0e1f35d06e04a145293
    
  );


}
export default Login;