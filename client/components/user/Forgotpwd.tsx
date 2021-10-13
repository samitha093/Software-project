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
                <Grid item md={7} className = "pwd_container" >
                <div className="form-wrapper">
                        <Typography className = "head-password">Forgot Password</Typography>
                        <form className="pricing-box">
                         <TextField
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                               // value={email}
                                size = "small"
                                className="textfield"
                                required                   
                        />
                                
                        </form>
                             <Button className = "btnsubmit"
                                                type="submit"
                                                variant="contained"
                                                size = "small"
                                        >
                                            send email
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