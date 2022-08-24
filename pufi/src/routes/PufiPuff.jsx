import React from 'react'
import puff from '../assets/img/puff.jpg'
import Navbar from '../components/Navbar'

const PufiPuff = () => {
  return (
<>
       <Navbar/>
       <div className='shopImgs'>
        <div className='container' id="pufiPuffContainer">

           
            
            <div className='columns' >
              <img  className="imgShop" id="pufiPuff" src={puff} alt="" />
            </div>

           </div>
           </div>
</>
           
        
  )
}

export default PufiPuff