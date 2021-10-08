import React from 'react'
import Icon from '@mdi/react';
import { mdiCartVariant } from '@mdi/js';
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
                    <Icon path={mdiCartVariant} color='black' size={2}/>
                    </div>
                </div>
            </div>
        );
}

export default Navbar;