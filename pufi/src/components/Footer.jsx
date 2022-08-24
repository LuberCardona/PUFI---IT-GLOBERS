import React from 'react'
import footer from '../assets/img/footer.JPG'
import footer2 from '../assets/img/footer2.JPG'
import logoFooter from '../assets/img/logoFooter.JPG'

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='containerFooter'>
        <div>
          <img src={logoFooter} alt="" />
        </div>
        
        <div className='footerItems'>
          <ul>
            <li>PUFI RAIN</li>
            <li>PUFI PUFF</li>
            <li>PUFI CART</li>
            <li>PUFI NAP</li>
          </ul>
        </div>

        <div className='footerItems'>
          <ul>
            <li>CONTACTO</li>
            <li>AYUDA</li>
            <li>COMO COMPRAR</li>
            <li>TÉRMINOS y CONDICIONES</li>
          </ul>
        </div>

        <div className='footerItems'>
          <ul>
            <li>COMPRA 100% SEGURA</li>
            <img src={footer2} alt="" />
          </ul>
        </div>

        <div className='icons'>
          <p>SEGUINOS EN</p>
          <div>
            <FontAwesomeIcon icon={faFacebook}/> 
            <FontAwesomeIcon icon={faTwitter}/> 
            <FontAwesomeIcon icon={faInstagram}/>
          </div>
        </div>
      </div>
    <div>
  </div>
<footer className='footerCopy'> 
   PUFI Copyright 2017 -  todos los derechos reservados
  <img id="imgFooter" src={footer} alt="" />
</footer>
  </div>
    </>
  )
}

export default Footer