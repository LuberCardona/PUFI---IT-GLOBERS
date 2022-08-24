import { Link } from "react-router-dom";
import Logo from '../assets/img/Logo.JPG';
import React from 'react'



const Navbar = () => {
    return (     

       <nav className="navbar">
           
                <Link id="home" to="/">
                 <img src={Logo} alt="" />
                </Link> 

                <Link className="btnNav" to="/PufiPuff">
                    PUFI PUFF
                </Link>
                <Link className="btnNav" to="/PufiRain">
                    PUFI RAIN
                </Link>
                <Link className="btnNav" to="/PufiCart">
                    PUFI CART
                </Link>
                <Link className="btnNav btn" to="/PufiNap">
                    PUFI NAP
                </Link>
            

            
                <Link className="btnNav menu" to="/">
                    MI CUENTA 
                </Link>   
                <Link className="btnNav btn menu" to="/">
                    MI COMPRA
                </Link>            
            

        </nav>
    );
};

export default Navbar;

