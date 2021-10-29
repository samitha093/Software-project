import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import Forgotpwd from '../../components/user/Forgotpwd';


const resetpwd: NextPage = () => {
    return (
            <div className="main-container">
            <Navbar/>
            <div className = "main-background">
               <Forgotpwd/>
            </div>            
        
      </div>
    );
}

export default resetpwd;
