import React from 'react'
import rain from '../assets/img/rain.jpg'
import Navbar from '../components/Navbar'


const PufiRain = () => {
  return (
<>
      <Navbar/>
       <div className='shopImgs'>
        <div className='container' id="pufiRainContainer">

            <div className='columns'>
              <img className="imgShop" id="pufiRain" src={rain} alt="" />
            </div>            

        </div>        
       </div>
</>
           
        
  )
}

export default PufiRain