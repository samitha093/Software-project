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
                <div className="navbar-left" style={{background:"#dac9e611"}}>
                    TickBid
                </div>
                <div className="navbar-right" style={{background:"#dac9e611"}}>
                    <ul className="main-menu">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/events">Events </Link></li>
                        <li ><Link href ="/about">About us</Link></li>
                        <li><Link href="/user">My Account</Link></li>
                    </ul>
                    <div className="cart">
                    <IconButton color="secondary" size="large" aria-label="add to shopping cart">
                    <ShoppingCartOutlinedIcon fontSize="inherit" />
                    </IconButton>
                    </div>
                </div>
            </div>
        );
}

export default Navbar;