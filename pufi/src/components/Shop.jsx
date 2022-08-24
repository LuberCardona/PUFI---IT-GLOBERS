import React from 'react'
import { Link } from "react-router-dom";

import rain from '../assets/img/rain.jpg'
import rain2 from '../assets/img/rain2.jpg'
import puff from '../assets/img/puff.jpg'
import puff2 from '../assets/img/puff2.jpg'
import cart from '../assets/img/cart.jpg'
import cart2 from '../assets/img/cart2.jpg'
import nap from '../assets/img/nap.jpg'
import nap2 from '../assets/img/nap2.png'

const Shop = () => {
  return (
       <div className='shopImgs'>
        <div className='container'>

            <div className='columns'>
              <img className="imgShop"  src={rain} alt="" />
            </div>
            <div className='columns'>
              <img className="imgShopDescripcion" src={rain2} alt="" />
              <h4>Pufi RAIN</h4>
              <br />              
              <p>Descripcion</p>
              <br />
              <Link className="btnVerMas" to="/PufiRain">
                VER MAS
              </Link>
            </div>

            <div className='columns'>
              <img className="imgShopDescripcion" src={puff2} alt="" />
              <h4>Pufi PUFF</h4>
              <br />
              <p>Descripcion</p>
              <br />
              <Link className="btnVerMas" to="/PufiPuff">
                VER MAS
              </Link>
            </div>
            <div className='columns'>
              <img  className="imgShop" src={puff} alt="" />
            </div>

            <div className='columns'>
              <img className="imgShop" src={cart} alt="" />
            </div>
            <div className='columns'>
              <img className="imgShopDescripcion" src={cart2} alt="" />
              <h4>Pufi CART</h4>
              <br />
              <p>Descripcion</p>
              <br />
              <Link className="btnVerMas" to="/PufiCart">
                VER MAS
              </Link>
            </div>

            <div className='columns'>
              <img className="imgShopDescripcion" src={nap2} alt="" />
              <h4>Pufi NAP</h4>
              <br />
              <p>Descripcion</p>
              <br />
              <Link className="btnVerMas" to="/PufiNap">
                MAS INFO
              </Link>
            </div>
            <div className='columns'>
              <img  className="imgShop" src={nap} alt="" />
            </div>

        </div>        
       </div>
           
        
  )
}

export default Shop