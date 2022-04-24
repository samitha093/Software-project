import React,{ useState, useEffect} from 'react'
import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import styles from './styles.module.css'

const login: NextPage = () => {
  
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
        container.classList.remove("right_panel_active");
      }
    } 
  };
    return (
        <div style={{backgroundColor:"#FBFBF4"}}>
          <Navbar/>
          <div className={styles.mainbackground}>
          <div className={styles.container} id="container">
            <div className={`${styles.form_container} ${styles.sign_up_container}`}>
              <form className={styles.modern_form} action="#">
                <h1>Create Account</h1>
                <span className={styles.new_span}>Blease Fill Your Information bellow</span>
                <input className={styles.inputbox_modern} type="text" placeholder="Name" />
                <input className={styles.inputbox_modern} type="email" placeholder="Email" />
                <input className={styles.inputbox_modern} type="password" placeholder="Password" />
                <input className={styles.inputbox_modern} type="password" placeholder="Confirm Password" />
                <button className={styles.modern_btn}>Sign Up</button>
              </form>
            </div>
            <div className={`${styles.form_container} ${styles.sign_in_container}`}>
              <form className={styles.modern_form} action="#">
                <h1>Sign in</h1>
                <span className={styles.new_span}>or use your account</span>
                <input className={styles.inputbox_modern} type="email" placeholder="Email" />
                <input className={styles.inputbox_modern} type="password" placeholder="Password" />
                <a href="./forgotpwd" className={styles.modern_a}>Forgot your password?</a>
                <button className={styles.modern_btn}>Sign In</button>
              </form>
            </div>
            <div className={styles.overlay_container}>
              <div className={styles.overlay}>
                <div className={`${styles.overlay_panel} ${styles.overlay_left}`}>
                  <h1>Welcome Back!</h1>
                  <p>To keep connected with us please login with your personal info</p>
                  <button className={`${styles.ghost} ${styles.modern_btn}`} onClick={signInButton}>Sign In</button>
                </div>
                <div className={`${styles.overlay_panel} ${styles.overlay_right}`}>
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button className={`${styles.ghost} ${styles.modern_btn}`} onClick={signUpButton}>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    );
}
export default login;
