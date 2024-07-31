import React from "react";
import freeCodeCampLogo from '../imagenes/freecodecamp-logo.png';
import '../hojas-de-estilo/Freecodecamplogo.css';

function Freecodecamplogo() {

  return (
    <div className='freecodecamp-logo-contenedor'>
      <img 
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo de freeCodeCamp' />
    </div>
  );
}

export default Freecodecamplogo;