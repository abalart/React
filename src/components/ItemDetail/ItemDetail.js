import React, { useState,useContext } from "react";
import {Image,Button,Text,VStack} from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import { Context } from "../../Context/CustomProvider";
 
 

const ItemDetail = ({producto}) => { 

  const { addProduct } = useContext(Context);
 
    
 /*function onAdd(){ //Funcion añadir al carrito
 Swal.fire('Producto agregado al carrito')
}*/

const [isButtonpPressed, setIsButtonpPressed] = useState(false);
//const { añadir } = useContext(Context);

  const onAdd = (qtyProduct) => {  //Desafio de eventos
    setIsButtonpPressed(true);
    addProduct(producto,qtyProduct) //qtyProduct es la cantidad a seleccionar por el usuario
    //añadir(producto,count);

  };


return(
    <>
     <VStack>  
        <Text  fontSize='20px'> {producto.title} </Text>
        <Image src={producto.image} w="200px" />
        <span>Description: {producto.description}</span>
        <span>Price: {producto.price}</span>
        <Button>Ver detalles </Button>
     </VStack> 

    {!isButtonpPressed ? (
         <div>
             <ItemCount stock={5} initial={1} onAdd={onAdd}  />
        </div>     
        ) : (
          <Link style={styles.container} to="/cart">
             <button>Finalizar Compra</button>
          </Link>
        )}

    </>
  
) 

}

export default ItemDetail


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "blue",
    backgroundColor: "blue"
  }}