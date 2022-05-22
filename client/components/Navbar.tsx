import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import {useRouter} from 'next/router';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2'
import {gethost} from '../session/Session';
import style from './styles.module.css'
interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = ({}) => {
    const router = useRouter()
    const [navbar,setNavbar] = React.useState(false);
    async function navclick (){
      axios.get(gethost() + 'a/refreshtoken',{withCredentials:true})
        .then(async (res)=>{
            if(res.data.type == 'BUYER'){
              router.push('/buyer');
            }else if(res.data.type == 'MANAGER'){
              router.push('/manager');
            }else if(res.data.type == 'SELLER'){
              router.push('/seller');
            }else{
              router.push('/user');
            }
        })
        .catch((err)=>{
          Swal.fire({
            icon: 'error',
            title: 'Authentication Failed',
            text: 'Please Login to your account',
            showConfirmButton: false,
            timer: 2500
          })
          router.push('/user');
        })
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
              <div className={style.navbar_mobile}>
                <FontAwesomeIcon style={{cursor:'pointer'}} icon={faBars} className={style.font_icon_mobilenave} onClick={openminimenu}/>
              </div>
                <div className={style.navbar_left} >
                  <div className={style.navbar_name}>
                    TickBid
                  </div>
                </div>
                <div className={style.navbar_right} >
                    <ul className={style.main_menu}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/events">Events </Link></li>
                        <li ><Link href ="/user/about">About us</Link></li>
                        <li onClick={navclick}>My Account</li>
                    </ul>
                    <div className={style.cart}>
                        <IconButton onClick={openminicart} className={style.navbar_active} size="large" aria-label="add to shopping cart">
                            <ShoppingCartOutlinedIcon fontSize="inherit" />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className={style.cart_drower} id='minicart'>
                <CloseIcon fontSize='large' className={style.cart_close}  onClick={closeminicart}/>
                <div className={style.cart_drower_content}> 
                  <div className={style.cart_drower_content_list}>
                    <div className={style.cart_drower_content_list_items}>
                      jdskhfkjhdsfkhdsk
                    </div>
                  </div>
                  <div className={style.cart_drower_content_btn}>
                    <div className={style.cart_drower_content_btn_flex}>
                    <div className={style.text_left}>Total </div><div className={style.text_right} >50007.00 LKR</div>
                    </div>
                    <div className={style.gotocheckout}>
                    <Link href ="/buyer/checkout">
                      <div className={style.gotocheckout_btn}>Go to checkout</div>
                    </Link>
                    </div>
                  </div>
                  
                </div>
            </div>
            <div className={style.menu_drower} id='minimenu'>
                <CloseIcon fontSize='large' className={style.menu_close}  onClick={closeminimenu}/>
                <div className={style.minimenu_drower_content}> 
                  <ul className={style.mobile_drower_menu}>
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