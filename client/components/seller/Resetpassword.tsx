import React from 'react';
import {Box,Grid,} from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import Styles from './Styles.module.css'
import Swal from 'sweetalert2'

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

  const [item, setitem] = React.useState<any[]>([])

    React.useEffect(()=>{
      axios.get('http://localhost:8000/seller/userdetails/61842a1e0ec95f011fdc3bcf')
      .then(async (res)=>{
        await setitem(res.data)
        console.log(res.data)
      })
      .catch(()=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Database connection error!'
          })
        }
      ) 
    },[])

    return(
        <div className={Styles.seller_r_setting}>
          <div className={Styles.seller_r_setting_con}>
            <form className={Styles.seller_modern_form} action="#">
              <Box className={Styles.seller_r_setting_con_box} component="form" sx={{'& .MuiTextField-root': { m: 1, width: '100%' },}}noValidate autoComplete="off" >
                <div className={Styles.seller_r_setting_con_box_text}>
                {/* romoved this : value={item.user_name} due to some of errors  */}
                  <TextField id="outlined-read-only-input" label="Name" InputProps={{readOnly: true,}} focused/>
                  <TextField id="outlined-read-only-input" label="Email" InputProps={{readOnly: true,}} focused/>
                  <TextField id="outlined-read-only-input" label="Contact" InputProps={{readOnly: true,}} focused/>
                </div>
              </Box>
            </form>
          </div> 
          <div className={Styles.seller_r_setting_con}>
            <form className={Styles.seller_modern_form} action="#">
              <h1 className = {Styles.seller_head_password} >Rest Password</h1>
              <input className={Styles.seller_inputbox_modern} type="password" placeholder="New Password" value={currentpw} onChange={(e)=>setcurrentpw(e.target.value)}/>
              <input className={Styles.seller_inputbox_modern} type="password" placeholder="New Password" value={newpw} onChange={(e)=>setnewpwpw(e.target.value)}/>
              <input className={Styles.seller_inputbox_modern} type="password" placeholder="Confirm New Password" value={cnewpw} onChange={(e)=>setcnewpwpw(e.target.value)}/>
              <br/><br/>
              <button className={Styles.seller_modern_btn}>Rest Password</button>
             </form>     
          </div>
        </div>
    );
}
export default Resetpassword;