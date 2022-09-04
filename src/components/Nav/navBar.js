/*
PROYECTO CON NOMBRE DE VARIABLES E INFORMACION EN INGLES
Brand (título/nombre de la tienda) ok
Un listado de categorías clickeables

*/

//import { render } from '@testing-library/react';
import React from 'react';  //Necesario
import './NavBar.css'
import logo from '../../imagenes/Logo.JPG'
import 'bootstrap/dist/css/bootstrap.css';


 const Nav = () => {  //Declaro un elemento JSX, sera hijo de App o del componente que quiera
    
  return (
      <nav className="navbar-light bg-light"> 
        <div>
          <img className="brand-logo center imagenLogo" src={logo} ></img>
          <ul className="ulEnNav estiloLinkNavegacion">
            <li className="nav-item"><a className="nav-link" href="#" >Productos</a></li>
            <li className="nav-item"><a className="nav-link"  href="#" >FAQs</a></li>
            <li className="nav-item"><a className="nav-link"  href="#" >Contacto</a></li>
            <li className="nav-item"><a className="nav-link"  href="#" >Outlet</a></li>
         </ul>
        </div>
      </nav>
        

      )
 }            
 
 export default Nav //Necesario