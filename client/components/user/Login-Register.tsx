import React, { useState } from 'react';
import {useRouter} from 'next/router';
import LockIcon from '@mui/icons-material/Lock';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import axios from 'axios';
import Swal from 'sweetalert2'
import {startsession, gethost, getuser } from '../../session/Session';

interface LoginProps {

}

const Login: React.FC<LoginProps> = ({}) => {
 const router = useRouter()

  const [name,setName] = React.useState<string>("");
  const [nameHasError,setNameHasError] = React.useState<boolean>(false);

  const [email,setEmail] = React.useState<string>("");
  const [emailHasError,setEmailError] = React.useState<boolean>(false);

  const [password,setPassword] =React.useState("");
  const [passwordError,setPasswordError] = React.useState<boolean>(false);

  const [confirmPassword,setconfirmpassword] =React.useState("");
  const [validationError,setvalidationerror] = React.useState<boolean>(false);

  const [contact,setContact] = React.useState("");
  const [contactHasError,setContactError] = React.useState(false);
  
  const [selectedRadiobtn, setselectedRadionbtn] =React.useState('BUYER');

  const [login_email,login_setEmail] = React.useState<string>("");
  const [login_emailHasError,login_setEmailError] = React.useState<boolean>(false);

  const [login_password,login_setPassword] =React.useState<string>("");
  const [login_passwordError,login_setPasswordError] = React.useState<boolean>(false);

  //const [selectedRadiobtn, setselectedRadionbtn] =React.useState('buyer');
  


async function signinformn(){
  const datapack = {
    email:login_email,
    password:login_password
  }
  //console.log(datapack);
  axios.post(gethost() + 'user/login',datapack)
  .then(async (res)=>{
    //console.log(res.data);
      await startsession(res.data.tokenkey,res.data.type)
      await login_setEmail('');
      await login_setPassword('');
      //alert('Login success')
      const type = getuser();
      if(type == 'buyer'){
        router.push('/buyer');
      }else if(type == 'manager'){
        router.push('/manager');
      }else if(type == 'seller'){
        router.push('/seller');
      }else{
        router.push('/user');
      }

  })
};
async function signUpformn(){
  if(name==="" || email==="" || password==="" || confirmPassword==="" || contact==="" || selectedRadiobtn===""){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something  to wrong. try again.',
      showConfirmButton: false,
      timer: 2500
    })
    return;
  }
  if(nameHasError || emailHasError || passwordError || validationError || contactHasError){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went to wrong. try again.',
      showConfirmButton: false,
      timer: 2500
    })
    return;
  }
  if(selectedRadiobtn==="MANAGER"){
    var exit = false;
    await axios.get(gethost() + 'g/managercount')
    .then(async (res)=>{
      if(res.data > 0){
        exit = true;
      }
    })
    if(exit){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Already existing Admin in System',
        showConfirmButton: false,
        timer: 2500
      })
      return;
    }
  }
  const datapack = {
    name:name,
    email:email,
    contact: contact,
    password:password,
    usertype:selectedRadiobtn
  }
  //console.log(datapack);
  axios.post(gethost() + 'g/register',datapack)
  .then(async (res)=>{
    const verifydatapack = {
      name:name,
      email:email,
      usertype:selectedRadiobtn
    }
    axios.post(gethost() + 'g/verify',verifydatapack)
    .then(async (res)=>{
      Swal.fire({
        text: 'Submit your OTP From Email',
        input: 'text',
        allowOutsideClick: false,
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Submit',
        preConfirm: (otp) => {
          const activatedatapack = {
            email:email,
            otp:otp
          }
          axios.post(gethost() + 'g/activate',activatedatapack)
          .then(async (res)=>{
            if(selectedRadiobtn ==="SELLER"){
              Swal.fire({
                icon: 'success',
                title: 'Registration successful',
                text: 'System Admin Will Review Your Account',
                //showConfirmButton: false,
                //timer: 2500
              })
            }else{
              //delete account Api needed
              Swal.fire({
                icon: 'success',
                title: 'Registration successful',
                text: 'Now You can Login With Your Email and password',
                //showConfirmButton: false,
                //timer: 2500
              })
            } 
          })
          .catch((err)=>{
            Swal.fire({
              icon: 'error',
              title: 'Wrong OTP',
              text: 'Try Again With Correct OTP',
              showConfirmButton: false,
              timer: 2500
            })
          })
          //console.log(otp);
        }
      })
    })
    .catch((err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong With Email Server. try again later.',
        showConfirmButton: false,
        timer: 2500
      })
    })
      await setName('');
      await setEmail('');
      await setContact('');
      await setPassword('');
      await setconfirmpassword('');
      await setselectedRadionbtn('');
  })
  .catch((err)=>{
    if (err.response.status == 400) {
      Swal.fire({
        icon: 'warning',
        title: 'Sorry',
        text: 'A user With this email address already exists',
        showConfirmButton: false,
        timer: 2500
      })
    } else if (err.response.status == 404) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Server connection error! please try again later',
          showConfirmButton: false,
          timer: 2500
        })
    } else if (err.response.status == 500) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Server Runtime error! please try again later',
        showConfirmButton: false,
        timer: 2500
      })
    } else {
        // Anything else
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went to wrong. try again.',
          showConfirmButton: false,
          timer: 2500
        })
    }

  })
}

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
  
  const confirmPasswordChangeHandler = async(event:any)=>{
      var me = new String(password);
      var you = new String(confirmPassword);
      var isEquel = JSON.stringify(me) === JSON.stringify(you);
      setvalidationerror(!isEquel);
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

  const isRadioSelected = (value :string): boolean => selectedRadiobtn === value;
  const onValueChange =(e:React.ChangeEvent<HTMLInputElement>): void => setselectedRadionbtn(e.currentTarget.value);
 
  const login_emailChangeHandler = (event:any)=>{
      login_setEmail(event.target.value);
      const email_regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      const valid = !!event.target.value.match(email_regex);
      login_setEmailError(!valid);
    }

  const login_passwordChangeHandler =(event:any)=>{
      login_setPassword(event.target.value);
      const valid = event.target.value.trim().length >= 5;
      login_setPasswordError(!valid);
    }
     
    
    const signUpButton = () => {
        if (process.browser) {
          const container = document.getElementById("container");
          if (container !== null) {
            container.classList.add("right_panel_active");
          }
        }
      };
      const signInButton = () => {
        if (process.browser) {
          const container = document.getElementById("container");
          if (container !== null) {
            container.classList.remove( "right_panel_active");
          }
        } 
      };

    
    return(

        <div className="container" id="container">

          <div className="form_container sign_up_container">
            <div className="modern_form">
              <h1 className ="head_signup">Create Account</h1>
              <span className="new_span">Please fill up your details below</span>
             
              <div className ="input_box_container" > 
              <input
                className="inputbox_modern"
                type="text" 
                placeholder="Name"
                value={name}
                onChange={nameChangeHandler}
                 /></div>
                {nameHasError && (<p className="error_message"> * Name cannot be empty</p>)}
              
               <div className ="input_box_container" > 
              <input
               className="inputbox_modern" 
               type="email"
               placeholder="Email"
               value={email}
               onChange={emailChangeHandler}
               /></div>
                {emailHasError && (<p className="error_message"> * Invalid email</p>)}  
               
               <div className = "input_box_container" > 
               <input 
               className="inputbox_modern"
               type="text" 
               placeholder="Contact Number"
               value={contact}
               onChange={contactChangeHandler}
               /></div>
               {contactHasError && (<p className="error_message"> * Enter a valid contact number</p>)}

               <div className ="input_box_container" > 
              <input 
              className="inputbox_modern" 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)} 
             //onChange={passwordChangeHandler}
               /></div>
              {passwordError && (<p className="error_message"> * Password can not be empty</p>)}

              <div className ="input_box_container" >  
              <input 
              className="inputbox_modern"
              type="password" 
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e)=>setconfirmpassword(e.target.value)} 
              //onChange={confirmPasswordChangeHandler}
              onBlur={confirmPasswordChangeHandler}
               /></div>
               {validationError && (<p className="error_message"> * Confirm password should match with your password</p>)}
              
              <div className="radio">  
              <label className ="radio_label">
              <input
              type="radio"
              value="BUYER"
              checked={isRadioSelected('BUYER')}
              onChange={onValueChange}
              />
              Buyer
              </label>
              <label className ="radio_label">
              <input
              type="radio"
              value="SELLER"
              checked={isRadioSelected('SELLER')}
              onChange={onValueChange}
              />
              Ticket Seller
              </label >
              <label className ="radio_label">
              <input
              type="radio"
              value="MANAGER"
              checked={isRadioSelected('MANAGER')}
              onChange={onValueChange}
              />
              Admin
              </label>
              </div>
               
              <button 
              className="modern_btn"
              disabled={emailHasError || passwordError || nameHasError}
              onClick={signUpformn}>Sign Up</button>
            </div>
          </div>




          <div className="form_container sign_in_container">
            <div className="modern_form">
              <h1 className ="head_signin" >Sign in</h1>
              <span className="new_span">or use your account</span>
            
            <div className ="input_box_container" > 
             <div className ="icn"><PersonSharpIcon sx={{ fontSize: 18 }}></PersonSharpIcon></div>  
              <input 
              className="inputbox_modern_1"
              type="email" 
              placeholder="User email"
              value={login_email}
              onChange={login_emailChangeHandler}
            // onBlur={emailBlurHandler} 
             />
             </div>
             {login_emailHasError && (<p className="error_message"> * Invalid email</p>)}
            <div className ="input_box_container"> 
            <div className="icn"> <LockIcon sx={{ fontSize: 18 }}></LockIcon></div>                       
              <input 
              className="inputbox_modern_1"
              type="password" 
              placeholder="Password" 
              value={login_password}
              onChange={login_passwordChangeHandler}
              onBlur={login_passwordChangeHandler}
              // onBlur={emailBlurHandler}
              />
              </div>
              {login_passwordError && (<p className="error_message"> * Password can not be empty</p>)}
              <a href="./user/forgotpwd" className="modern_a">Forgot your password?</a>
              <button className="modern_btn" onClick={signinformn}>Sign In</button>
            </div>
          </div>

          <div className="overlay_container">
            <div className="overlay">
              <div className="overlay_panel overlay_left">
                <h1 className="content_1">Welcome Back!</h1>
                <p className="content_2">To keep connected with us. <br/> please login with your personal info</p>
                <button 
                className="ghost modern_btn"
                onClick={signInButton}>Sign In</button>
              </div>
              <div className="overlay_panel overlay_right">
                <h1 className="content_1">Hello, Friend!</h1>
                <p className="content_2">Please login with personal info & <br/>Keep connected with us.  </p>
                <button 
                className="ghost modern_btn"
                onClick={signUpButton}
                disabled={emailHasError || passwordError}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
    
    );

}
export default Login;