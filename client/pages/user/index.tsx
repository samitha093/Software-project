import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import Login from '../../components/user/Login'
<<<<<<< HEAD
=======
import Register from '../../components/user/Register'
>>>>>>> 780d4b4c7541ca7e51d2a0e1f35d06e04a145293

const index: NextPage = () => {
    return (
        <div>
             <Navbar/>
              <div className= "main_container">  
                      
              <Login/>
              </div>
<<<<<<< HEAD
          
        </div>
            
           
        
=======
>>>>>>> 780d4b4c7541ca7e51d2a0e1f35d06e04a145293
    );
}

export default index;
