import React from 'react';
import '../hojas-de-estilo/Clear.css';

const Clear = (props) => (
  <div className='boton-clear' 
    onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default Clear;
