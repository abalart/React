
import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
 

const ItemDetailContainer = () => {  //Este componente le pasa a ItemDetails la info de productos por medio del estado SetProducto,
    //Primero se obtiene data  del fetch y luego se setea con SetProducto


const [producto,setProducto] = useState({})    //Si esperamos recibir un solo objeto se pone {}
    
useEffect( () => {

const getItem = async () => {  //Funcion que obtiene la info de los productos mediante una API
    try{
    const respuesta = await fetch('https://fakestoreapi.com/products/3')   //Se queda esperando hasta tener la respuesta, recien ahi avanza
   
    const data = await respuesta.json()
    
    setProducto(data)
    
    }
    catch{
        console.error("Un error")
    }
   
}

getItem(); 

},[])



return(
    
    <>
    
    <ItemDetail  producto={producto}/> 
    </>
) 

}

export default ItemDetailContainer

