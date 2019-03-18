import React from 'react';
import { Link} from "react-router-dom";
import '../../styles/Header.css';

const Header = ({logo, classHeader, option, handleMenu}) => (
  <div className={classHeader}>
    <div className='logo'>
      <img src={logo} width="100"  alt='logo'/>
    </div>
    <div className='menu'>
      <Link className={ option === 0 ? 'active' : 'item'} to="/" onClick={() => handleMenu(0)}>Inicio</Link>
      <Link className={ option === 1 ? 'active' : 'item'} to="/conocenos" onClick={() => handleMenu(1)}>Conócenos</Link>
      <Link className={ option === 2 ? 'active' : 'item'} to="/inmuebles" onClick={() => handleMenu(2)}>Propiedades en Venta</Link>
      <Link className={ option === 3 ? 'active' : 'item'} to="/contactanos" onClick={() => handleMenu(3)}>Vender una propiedad</Link>
    </div>
  </div>
)

export default Header;
