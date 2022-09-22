import React from 'react';
import {Image,Button,Text,VStack} from '@chakra-ui/react'
 
 


const Item = ({product}) => {  //Este componente recibe un objeto item para extraer de el la info a mostrar en una card
   
 
return(
  <VStack>  
    <Text  fontSize='20px'> {product.product} </Text>
    <Image src={product.image} w="200px" />
    <Button>Ver detalles </Button>
  </VStack> 
) 

}

export default Item