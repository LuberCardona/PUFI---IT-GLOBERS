import React from 'react'
import { Link } from "react-router-dom";
import img1 from '../assets/img/img1.jpg'


const Main = () => {
  return (
    <div className='containermain'>
      <img className='img_main' src={img1} />
      <p> <span>ESTAR CÓMODO,</span> <span>NUNCA FUE TAN FÁCIL.</span></p>
      <Link className="btnShop" to="/">
        SHOP
      </Link>
    </div>        
  )
}

export default Main