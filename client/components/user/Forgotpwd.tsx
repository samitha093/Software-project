import React from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image';
import lock from '../../assets/forgot-password.png'
import { Typography,Button,TextField,Link,Box,Grid,Stack} from '@mui/material';

interface ForgotpwdProps {

}

const Forgotpwd: React.FC<ForgotpwdProps> = ({}) => {
    return(
        <div >
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
                <Grid item xs={7} className = "pwd_container" >
                <div className="form-wrapper">
                        <Typography className = "head-password">Forgot Password</Typography>
                        <form className="pricing-box">
                            <Stack spacing ={4}>
                                <TextField
                                    type="password"
                                    id="new-password"
                                    placeholder="New Password"
                                    size = "small"
                                    className="textfield"
                                    required
                                        />
                                <TextField
                                    type="password"
                                    id="confirm-password"
                                    placeholder="Confirm Password"
                                    size = "small"
                                    className="textfield"
                                    required
                                        />        
                             </Stack>
                        </form>
                             <Button className = "btnsubmit"
                                                type="submit"
                                                variant="contained"
                            
                                                size = "small"
                                        >
                                            Reset Password
                                        </Button>
                   </div>
                    
                </Grid>
                <Grid item xs className = "box-1" >
               
                    <Image
                     src = {lock}
                     layout = "responsive"
                     m-50
                    ></Image>
                         
                </Grid>
                        
            </Grid>
        </Box>  
</div>

    );



}
export default Forgotpwd;