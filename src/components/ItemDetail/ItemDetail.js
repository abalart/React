import React from 'react';
import {Image,Button,Text,VStack} from '@chakra-ui/react'

const ItemDetail = ({producto}) => { 
    

return(
    <>
     <VStack>  
        <Text  fontSize='20px'> {producto.title} </Text>
        <Image src={producto.image} w="200px" />
        <span>Description: {producto.description}</span>
        <span>Price: {producto.price}</span>
        <Button>Ver detalles </Button>
     </VStack> 

    </>
  

) 

}

export default ItemDetail