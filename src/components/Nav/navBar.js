import React from 'react';  //Necesario
import './NavBar.css'
import logo from '../../imagenes/Logo.JPG'
import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from '../../components/CartWidget/CartWidget'
import {Link,NavLink} from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { Nav } from "./Nav/Nav";




 const NavBar = ({categories}) => {  //Declaro un elemento JSX, sera hijo de App o del componente que quiera
    
  return (
      <>
      <header>
      <Link to={'/'}>
        <img className="brand-logo center imagenLogo rounded mx-auto d-block" src={logo} ></img>
      </Link>
         <Nav className="navbar-light bg-light estiloLinkNavegacion" categories={categories} />
         <Link to={'cart'}>
            <CartWidget/>
          </Link>
      </header>

      
      </>     
          )
         
 }            

 const styles = {
    links: {
        padding: 10,
    }
}
 
 export default NavBar //Necesario