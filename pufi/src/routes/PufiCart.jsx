import React from 'react'
import cart from '../assets/img/cart.jpg'
import Navbar from '../components/Navbar'

const PufiCart = () => {
  return (
<>
       <Navbar/>
       <div className='shopImgs'>
        <div className='container' id="pufiCartContainer">           
            
            <div className='columns' >
              <img  className="imgShop" id="pufiCart" src={cart} alt="" />
            </div>

           </div>
           </div>
</>
           
        
  )
}

export default PufiCart