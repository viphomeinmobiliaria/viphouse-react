import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/Footer.css';

const Footer = ({logo, handleMenu}) => (
    <div className='footer'>
      <hr className='divider'/>
      <div className='menu-footer'>
        <Link className='menulink' onClick={() => handleMenu(0)} to="/">Inicio</Link>
        <Link className='menulink' onClick={() => handleMenu(1)} to="/">Conócenos</Link>
        <Link className='menulink' onClick={() => handleMenu(2)} to="/">Propiedades en Venta</Link>
        <Link className='menulink' onClick={() => handleMenu(3)} to="/">Vender una propiedad</Link>
      </div>
      <hr className='divider'/>
      <div className='logo-container'>
        <div className='logo-footer'>
          <img src={logo} width="100" height="50" alt='logo'/>
        </div>
        <div className='derechos'>
          <p>2019 © VipHouse, todos los derechos reservados</p>
        </div>
      </div>
      <div className='politics'>
        <div className='pp'>
          <p>Política de privacidad</p>
        </div>
        <div className='tu'>
          <p>Terminos de uso</p>
        </div>
      </div>
    </div>
);

export default Footer;
