/*
PROYECTO CON NOMBRE DE VARIABLES E INFORMACION EN INGLES
Brand (título/nombre de la tienda)
Un listado de categorías clickeables
Incorpora alguna librería de estilos con bootstrap/materialize u otro de tu preferencia
(opcional).
*/

import { render } from '@testing-library/react';
import React from 'react';  //Necesario
import './Nav.css'


 const Nav = () => {  //Declaro un elemento JSX, sera hijo de App o del componente que quiera
    
  return (
        
        <div class="nav-wrapper">
          <a href="#!" className="brand-logo center">Inserte logo aqui</a>
          <ul class="left hide-on-med-and-down ">
            <li><a href="#" className="estiloLinkNavegacion">Productos</a></li>
            <li><a href="#" className="estiloLinkNavegacion">FAQs</a></li>
            <li><a href="#" className="estiloLinkNavegacion">Contacto</a></li>
          </ul>
        </div>
       
      )
 }            
 
 export default Nav //Necesario