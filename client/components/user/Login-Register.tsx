import React, { useState } from 'react'
import {useRouter} from 'next/router'

interface LoginProps {

}

const Login: React.FC<LoginProps> = ({}) => {
 const router = useRouter()

  const [name,setName] = React.useState<String>("");
  const [nameHasError,setNameHasError] = React.useState<boolean>(false);

  const [email,setEmail] = React.useState<string>("");
  const [emailHasError,setEmailError] = React.useState<boolean>(false);

  const [password,setPassword] =React.useState("");
  const [passwordError,setPasswordError] = React.useState<boolean>(false);

  const [confirmPassword,setconfirmpassword] =React.useState("");
  const [validationError,setvalidationerror] = React.useState<boolean>(false);

  const [contact,setContact] = React.useState("");
  const [contactHasError,setContactError] = React.useState(false);
  
  const [selectedRadiobtn, setselectedRadionbtn] =React.useState('buyer');

  const isRadioSelected = (value :string): boolean => selectedRadiobtn === value;
    
  const onValueChange =(e:React.ChangeEvent<HTMLInputElement>): void => setselectedRadionbtn(e.currentTarget.value);


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
  const [login_email,login_setEmail] = React.useState<string>("");
  const [login_emailHasError,login_setEmailError] = React.useState<boolean>(false);
  const [login_password,login_setPassword] =React.useState<string>("");
  const [login_passwordError,login_setPasswordError] = React.useState<boolean>(false);
    

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
            container.classList.add("right-panel-active");
          }
        }
      };
      const signInButton = () => {
        if (process.browser) {
          const container = document.getElementById("container");
          if (container !== null) {
            container.classList.remove("right-panel-active");
          }
        } 
      };

    
    return(

        <div className="container" id="container">

          <div className="form-container sign-up-container">
            <form className='modern-form' action="#">
              <h1 className =" head-signup">Create Account</h1>
              <span className='new-span'>Please fill up your details below</span>
              {nameHasError && (<p className="error-message"> * Name cannot be empty</p>)}
              <input
                className='inputbox-modern'
                type="text" 
                placeholder="Name"
                //value={name}
                onChange={nameChangeHandler}
                 />
               {emailHasError && (<p className="error-message"> * Invalid email</p>)}  
              <input
               className='inputbox-modern' 
               type="email"
               placeholder="Email"
               value={email}
               onChange={emailChangeHandler}
               />
               {contactHasError && (<p className="error-message"> * Enter a valid contact number</p>)}
               <input 
               className='inputbox-modern' 
               type="text" 
               placeholder="Contact Number"
               value={contact}
               onChange={contactChangeHandler}

               />
               {passwordError && (<p className="error-message"> * Password can not be empty</p>)}
              <input 
              className='inputbox-modern' 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)} 
             //onChange={passwordChangeHandler}
               />
              {validationError && (<p className="error-message"> * Confirm password should match with your password</p>)} 
              <input 
              className='inputbox-modern' 
              type="password" 
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e)=>setconfirmpassword(e.target.value)} 
              //onChange={confirmPasswordChangeHandler}
              onBlur={confirmPasswordChangeHandler}
               />
              
              <div className="radio">  
              <label className ="radio-label">
              <input
              type="radio"
              value="buyer"
              checked={isRadioSelected('buyer')}
              onChange={onValueChange}
              />
              Buyer
              </label>
              <label className ="radio-label">
              <input
              type="radio"
              value="seller"
              checked={isRadioSelected('seller')}
              onChange={onValueChange}
              />
              Ticket Seller
              </label >
              <label className ="radio-label">
              <input
              type="radio"
              value="Admin"
              checked={isRadioSelected('Admin')}
              onChange={onValueChange}
              />
              Admin
              </label>
              </div>
               
              <button 
              className='modern-btn'
              disabled={emailHasError || passwordError || nameHasError}
              onClick={signUpButton}>Sign Up</button>
            </form>
          </div>


          <div className="form-container sign-in-container">
            <form className='modern-form' action="#">
              <h1 className ="head-signin" >Sign in</h1>
              <span className='new-span'>or use your account</span>
            {login_emailHasError && (<p className="error-message"> * Invalid email</p>)}  
              <input 
              className='inputbox-modern' 
              type="email" 
              placeholder="Email"
              value={login_email}
              onChange={login_emailChangeHandler}
            // onBlur={emailBlurHandler} 
             />
            {login_passwordError && (<p className="error-message"> * Password can not be empty</p>)}                         
              <input 
              className='inputbox-modern' 
              type="password" 
              placeholder="Password" 
              value={login_password}
              onChange={login_passwordChangeHandler}
              onBlur={login_passwordChangeHandler}
              // onBlur={emailBlurHandler}
              />
              <a href="./user/forgotpwd" className='modern-a'>Forgot your password?</a>
              <button className='modern-btn'>Sign In</button>
            </form>
          </div>

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="content-1">Welcome Back!</h1>
                <p className="content-2">To keep connected with us. <br/> please login with your personal info</p>
                <button 
                className="ghost modern-btn" 
                onClick={signInButton}>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="content-1">Hello, Friend!</h1>
                <p className="content-2">Please login with personal info & <br/>Keep connected with us.  </p>
                <button 
                className="ghost modern-btn" 
                onClick={signUpButton}
                disabled={emailHasError || passwordError}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
    
    );

}
export default Login;