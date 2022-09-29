
import React from 'react';  //Necesario
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import logo_carrito from '../../imagenes/logo-carrito.jpg'

const CartWidget = () => {  
    return(
        <>
     <div>   
        <img className="brand-logo  imagenLogoCarrito rounded float-end" src={logo_carrito} ></img>
    </div>
     
         </>
    )

}

export default CartWidget //Necesario