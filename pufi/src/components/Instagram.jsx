import React from 'react'
import rain from '../assets/img/rain.jpg'
import rain3 from '../assets/img/rain3.jpg'
import puff from '../assets/img/puff.jpg'
import puff3 from '../assets/img/puff3.jpg'
import cart from '../assets/img/cart.jpg'
import nap from '../assets/img/nap.jpg'

const Instagram = () => {
  return (
    <>
        <div className='containerInstagram'>
            <h6>INSTAGRAM</h6>
            <h1>#ESPUFI</h1>
        </div>

        <div className='shopImgsInst'>
            <div className='containerIns'>

                <div className='columnsInstagram'>
                <img className="imgInstagram" src={rain} alt="" />
                </div>
                <div className='columnsInstagram'>
                <img className="imgInstagram" src={rain3} alt="" />
                </div>
                <div className='columnsInstagram'>
                <img className="imgInstagram" src={puff} alt="" />
                </div>
                <div className='columnsInstagram'>
                <img className="imgInstagram" src={puff3} alt="" />
                </div>
                <div className='columnsInstagram'>
                <img className="imgInstagram" src={cart} alt="" />
                </div>
                <div className='columnsInstagram'>
                <img className="imgInstagram" src={nap} alt="" />
                </div>

            </div>
        </div>

    </>
   
  )
}

export default Instagram