import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = ({}) => {
        return (
            <div className="navbar">
                <div className="navbar-left">
                    TickBid
                </div>
                <div className="navbar-right">
                    <ul className="main-menu">
                        <li>Home</li>
                        <li>Events</li>
                        <li>About us</li>
                        <li>My Accout</li>
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