import React from 'react'
import nap from '../assets/img/nap.jpg'
import Navbar from '../components/Navbar'

const PufiNap = () => {
  return (
<>
       <Navbar/>
       <div className='shopImgs'>
        <div className='container' id="pufiNapContainer">           
            
            <div className='columns' >
              <img  className="imgShop" id="pufiNap" src={nap} alt="" />
            </div>

           </div>
           </div>
</>
           
        
  )
}

export default PufiNap