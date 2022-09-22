/*
function ItemDetail({ item }) {
return <>
…
// Desarrolla la vista de detalle expandida del producto con su imagen título,
descripción y precio
...
</>;
}
*/

import React from 'react';
import {Image,Button,Text,VStack} from '@chakra-ui/react'

const ItemDetail = ({producto}) => { 
    console.log("Todos los productossssss")
    console.log(producto)

return(
    <>
     <VStack>  
    <Text  fontSize='20px'> {producto.title} </Text>
    <Image src={producto.image} w="200px" />
    <span>{producto.descripción}</span>
    <Button>Ver detalles </Button>
  </VStack> 

    </>
  

) 

}

export default ItemDetail