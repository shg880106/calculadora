import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton(props) {
  
  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  //concidionales
  if (esOperador(props.children)){
    return (
      <div 
        className='boton-contenedor operador'
        //funcion anonima
        onClick={() => props.manejarClic(props.children)}>
        {props.children}
      </div>
    );
  } else {
    return (
      <div 
        className='boton-contenedor'
        //funcion anonima
        onClick={() => props.manejarClic(props.children)}>
        {props.children}
      </div>
    );
  }

  //sino se usan las condicionales se usa este codigo
  // return (
  //   <div 
  //     className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
  //     //funcion anonima
  //     onClick={() => props.manejarClic(props.children)}>
  //     {props.children}
  //   </div>
  // );
}

export default Boton;