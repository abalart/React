
import React from 'react';  //Necesario
import './NavBar.css'
import logo from '../../imagenes/Logo.JPG'
import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from '../../components/CartWidget/CartWidget'

import {Lik,NavLink} from 'react-router-dom'


const categories = [
  {id:0,title: 'electronics',route: '/categoria/electronics'},
  {id:1,title: 'man clotes', route: '/categoria/man-clotes'},
  {id:2,title: 'decorations', route: '/categoria/decorations'},
  {id:3,title: 'jewelery', route: '/categoria/jewelery'}
]

 const Nav = ({categorias}) => {  //Declaro un elemento JSX, sera hijo de App o del componente que quiera
    
  return (
      <>
        <nav  className="navbar-light bg-light estiloLinkNavegacion">
            {categories.map((category) => {
                return <NavLink key={category.id} to={category.route} style={styles.links}>{category.title}</NavLink>
            })}
        </nav>
             <img className="brand-logo center imagenLogo rounded mx-auto d-block" src={logo} ></img>
            <CartWidget/>
      </>     
          )
         
 }            

 const styles = {
    links: {
        padding: 10,
    }
}
 
 export default Nav //Necesario