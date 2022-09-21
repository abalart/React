
import React from 'react';  //Necesario
import './NavBar.css'
import logo from '../../imagenes/Logo.JPG'
import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from '../../components/CartWidget/CartWidget'

const categorias = [
  {id:0,nombre: 'electronics',ruta: '/categoria/electronics'},
  {id:1,nombre: 'man clotes', ruta: '/categoria/man-clotes'},
  {id:1,nombre: 'decorations', ruta: '/categoria/decorations'}
]

 const Nav = () => {  //Declaro un elemento JSX, sera hijo de App o del componente que quiera
    
  return (
   
      <nav className="navbar-light bg-light"> 
        <div>
          <img className="brand-logo center imagenLogo rounded mx-auto d-block" src={logo} ></img>
          <ul className="ulEnNav estiloLinkNavegacion">
            <li className="nav-item"><a className="nav-link" href="#" >Productos</a></li>
            <li className="nav-item"><a className="nav-link"  href="#" >FAQs</a></li>
            <li className="nav-item"><a className="nav-link"  href="#" >Contacto</a></li>
            <li className="nav-item"><a className="nav-link"  href="#" >Outlet</a></li>
         </ul>
        </div>
       <CartWidget/>
      </nav>
    
      )
 }            
 
 export default Nav //Necesario