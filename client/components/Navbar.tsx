import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import { getuser } from '../session/Session';
import CloseIcon from '@mui/icons-material/Close';
import { textAlign } from '@mui/system';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = ({}) => {
    const router = useRouter()
    const [navbar,setNavbar] = React.useState(false);
    async function navclick (){
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
    }
    const closeminicart = () => {
      //console.log('cart');
       if (process.browser) {
         const container = document.getElementById("minicart");
       if (container !== null) {
      //container.classList.add("right-panel-active");
      //container.style.width ='0px';
      container.style.right='-400px';
       }
       }
    };
    const openminicart = () => {
       if (process.browser) {
         const container = document.getElementById("minicart");
       if (container !== null) {
        if(window.innerWidth < 500){
          container.style.width ='300px';
        }
      //     container.classList.add("right-panel-active");
      container.style.right ='0px';
       }
       }
    };
    const openminimenu = () => {
      if (process.browser) {
        const container = document.getElementById("minimenu");
      if (container !== null) {
     container.style.left ='0px';
      }
      }
    };
    const closeminimenu = () => {
      if (process.browser) {
        const container = document.getElementById("minimenu");
      if (container !== null) {
     container.style.left ='-300px';
      }
      }
    };
    const changebg = () =>{
      //console.log(window.scrollY);
      if(window.scrollY >= 10){
        setNavbar(true);
      }else{
        setNavbar(false);
      }
    }
    //window.addEventListener('scroll',changebg);
    React.useEffect(() => {
    window.addEventListener('scroll',changebg);
    },[]);
        return (
          <div>
            <div className={navbar ? 'navbar active' : 'navbar'}>
              <div className='navbar-mobile'>
                <FontAwesomeIcon style={{cursor:'pointer'}} icon={faBars} className='font-icon-mobilenave' onClick={openminimenu}/>
              </div>
                <div className="navbar-left" >
                  <div className='navbar-name'>
                    TickBid
                  </div>
                </div>
                <div className="navbar-right" >
                    <ul className="main-menu">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/events">Events </Link></li>
                        <li ><Link href ="/user/about">About us</Link></li>
                        <li onClick={navclick}>My Account</li>
                    </ul>
                    <div className="cart">
                        <IconButton onClick={openminicart} className="navbar-active" size="large" aria-label="add to shopping cart">
                            <ShoppingCartOutlinedIcon fontSize="inherit" />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className='cart-drower' id='minicart'>
                <CloseIcon fontSize='large' className='cart-close'  onClick={closeminicart}/>
                <div className='cart-drower-content'> 
                  <div className='cart-drower-content-list'>
                    <div className='cart-drower-content-list-items'>
                      jdskhfkjhdsfkhdsk
                    </div>
                  </div>
                  <div className='cart-drower-content-btn'>
                    <div className='cart-drower-content-btn-flex'>
                    <div className='text-left'>Total </div><div className='text-right' >50007.00 LKR</div>
                    </div>
                    <div className='gotocheckout'>
                    <Link href ="/buyer/checkout">
                      <div className='gotocheckout-btn'>Go to checkout</div>
                    </Link>
                    </div>
                  </div>
                  
                </div>
            </div>
            <div className='menu-drower' id='minimenu'>
                <CloseIcon fontSize='large' className='menu-close'  onClick={closeminimenu}/>
                <div className='minimenu-drower-content'> 
                  <ul className='mobile-drower-menu'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/events">Events </Link></li>
                    <li><Link href ="/user/about">About us</Link></li>
                    <li onClick={navclick}>My Account</li>
                  </ul>
                </div>
            </div>
          </div>
            
        );
}

export default Navbar;