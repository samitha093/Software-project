import React from 'react'
import Link from 'next/link'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = ({}) => {
        return (
            <div className="navbar">
                <div className="navbar-left" >
                    TickBid
                </div>
                <div className="navbar-right" >
                    <ul className="main-menu">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/events">Events </Link></li>
                        <li ><Link href ="/user/about">About us</Link></li>
                        <li><Link href="/user">My Account</Link></li>
                    </ul>
                    <div className="cart">
                    <Link href="/buyer/cart">
                        <IconButton color="secondary" size="large" aria-label="add to shopping cart">
                            <ShoppingCartOutlinedIcon fontSize="inherit" />
                        </IconButton>
                    </Link>
                    </div>
                </div>
            </div>
        );
}

export default Navbar;