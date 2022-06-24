import React from "react";
import {Link} from 'wouter'


const Select = () =>{
  return(
    <div style={{border: '1px solid white', padding:'0 2rem 2rem 2rem', marginTop:'2rem' }}>
      <p>select</p>
      <Link to="/formularios/formulario">Formulario</Link>
      <Link to="/formularios/sorveteria">Sorveteria</Link>
    </div>
  )
}
export default Select
