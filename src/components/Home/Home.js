import React from 'react';  //Necesario
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import logo_home from '../../imagenes/home.jpg' 

const Home = () => {  
    return(
     <div  >   
        <img className="brand-logo  imagenLogoCarrito rounded float-end" src={logo_home} ></img>
         
    </div>
        
    )

}

export default Home //Necesario