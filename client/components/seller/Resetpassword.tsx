import React from 'react';
import {Box,Grid,} from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import axios from 'axios'

interface ForgotpwdProps {

}
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Resetpassword: React.FC<ForgotpwdProps> = ({}) => {

  const [login_email,login_setEmail] = React.useState<string>("");
  const [currentpw, setcurrentpw] = React.useState("");
  const [newpw, setnewpwpw] = React.useState("");
  const [cnewpw, setcnewpwpw] = React.useState("");

  const [item, setitem] = React.useState([])
    React.useEffect(()=>{
      axios.get('http://localhost:8000/seller/userdetails/61842a1e0ec95f011fdc3bcf')
      .then(async (res)=>{
        await setitem(res.data)
        console.log(res.data)
      }) 
    },[])

    return(
        <div className="seller-r-setting">
          <div className="seller-r-setting-con">
            <form className='seller-modern-form' action="#">
              <Box className="seller-r-setting-con-box" component="form" sx={{'& .MuiTextField-root': { m: 1, width: '100%' },}}noValidate autoComplete="off" >
                <div className="seller-r-setting-con-box-text">
                  <TextField id="outlined-read-only-input" label="Name" value={item.user_name} InputProps={{readOnly: true,}} focused/>
                  <TextField id="outlined-read-only-input" label="Email" value={item.email} InputProps={{readOnly: true,}} focused/>
                  <TextField id="outlined-read-only-input" label="Contact number" value={item.contact} InputProps={{readOnly: true,}} focused/>
                </div>
              </Box>
            </form>
          </div> 
          <div className="seller-r-setting-con">
            <form className='seller-modern-form' action="#">
              <h1 className = "seller-head-password" >Rest Password</h1>
              <input className='seller-inputbox-modern' type="password" placeholder="New Password" value={currentpw} onChange={(e)=>setcurrentpw(e.target.value)}/>
              <input className='seller-inputbox-modern' type="password" placeholder="New Password" value={newpw} onChange={(e)=>setnewpwpw(e.target.value)}/>
              <input className='seller-inputbox-modern' type="password" placeholder="Confirm New Password" value={cnewpw} onChange={(e)=>setcnewpwpw(e.target.value)}/>
              <br/><br/>
              <button className='seller-modern-btn'>Rest Password</button>
             </form>     
          </div>
        </div>
    );
}
export default Resetpassword;