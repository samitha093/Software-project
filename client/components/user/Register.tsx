import React from 'react'
import {useRouter} from 'next/router'
import {Grid,Box,Stack,Typography,Button,TextField,Link,Radio,RadioGroup,FormControl,FormControlLabel,FormLabel } from '@mui/material';

interface RegisterProps {

}
const Register: React.FC<RegisterProps> = ({}) => {
  const Router = useRouter();

  const [name,setName] = React.useState<String>("");
  const [nameHasError,setNameHasError] = React.useState<boolean>(false);

  const [email,setEmail] = React.useState<string>("");
  const [emailHasError,setEmailError] = React.useState<boolean>(false);

  const [password,setPassword] =React.useState<string>("");
  const [passwordError,setPasswordError] = React.useState<boolean>(false);

  const [contact,setContact] = React.useState("");
  const [contactHasError,setContactError] = React.useState(false);


  const nameChangeHandler = (event:any) =>{
      setName(event.target.value)
      const isValid = event.target.value.trim().length >0;
      setNameHasError(!isValid);
  }

  const passwordChangeHandler = (e:any)=>{
      setPassword(e.target.value);
      const isValid = e.target.value.length > 5;
      setPasswordError(!isValid);
  }

  const contactChangeHandler =(e:any) =>{
      setContact(e.target.value);
      const mobile_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      const isValid = e.target.value.match(mobile_regex);

      setContactError(!isValid);
  }

  const emailChangeHandler = (event:any)=>{
      setEmail(event.target.value);
      const email_regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      const valid = !!event.target.value.match(email_regex);
      setEmailError(!valid);


  }
  const submitForm = (e:any)=>{
      e.preventDefault();
      setContact("");
      setPassword("");
      setName("");
      setEmail("")
      Router.push('/user/login');
  }

        return (
          <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item xs={6} className = "login_container">
                    <div className="form-wrapper">
                    <Typography className = "head">Sign Up</Typography>
                    <form className="pricing-box">
                        {nameHasError && (<p className="error-message"> * Name cannot be empty</p>)}
                        <Stack spacing = {2}>
                              <TextField
                                  type="text"
                                  id="name"
                                  placeholder="Name"
                                  value={name}
                                  onChange={nameChangeHandler}
                                  size= "small"
                                  required
                              />
                              {emailHasError && (<p className="error-message"> * Invalid email</p>)}
                              <TextField
                                  type="email"
                                  id="email"
                                  placeholder="Email"
                                  value={email}
                                  onChange={emailChangeHandler}
                                  size = "small"
                                  required
                              />
                              {passwordError && (<p className="error-message"> * Password can not be empty</p>)}
                              <TextField
                                  type="password"
                                  id="password"
                                  placeholder="Password"
                                  value={password}
                                  onChange={passwordChangeHandler}
                                  size ="small"
                                  required
                              />
                              {contactHasError && (<p className="error-message"> * Enter a valid contact number</p>)}
                              <TextField
                                  type="text"
                                  id="contact"
                                  placeholder="Contact Number"
                                  value={contact}
                                  onChange={contactChangeHandler}
                                  size = "small"
                                  required
                              />
                            </Stack>
                            <FormControl component="fieldset" className = "already-signup">
                              <FormLabel component="legend">You are here as</FormLabel>
                              <RadioGroup row aria-label="You are here as" name="row-radio-buttons-group">
                                    <FormControlLabel value="buyer" control={<Radio />} label="Buyer" />
                                    <FormControlLabel value="seller" control={<Radio />} label="Ticket Seller" />
                                    <FormControlLabel value="manager" control={<Radio />} label="Manager" />
                              </RadioGroup>
                            </FormControl>
                        <div className="already-signup">
                            Already have an account ? <Link href="/user/login" className="link">Sign in</Link>
                        </div>
                        <Button className = "btnsubmit"
                                type="submit"
                                variant="contained"
                                disabled={emailHasError || passwordError || nameHasError}
                                onClick={submitForm}
                        >
                            Sign UP
                        </Button>

                    </form>
                </div>
                      

                    </Grid>
                    <Grid item xs={6} >
                    <Box className = "box">
                    </Box>   
                                
                    </Grid>
                 </Grid>
            
 
          </Box>     
        );
}

export default Register;