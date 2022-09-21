import React from 'react';
import Item from '../Item/Item'
import {Text,Stack} from '@chakra-ui/react'



 //Este componente recibe un objeto item para extraer de el la info a mostrar en una card por medio de un map

const ItemList = ({listProducts}) => { 
    

return(
 <>
 <Stack spacing={3}>
    <Text fontSize='50px' color='tomato' textAlign={[ 'left', 'center' ]}
    >
    Lista de productos
    </Text>
 </Stack>
  {listProducts.map((prod,i) => <Item key={`${prod.products}-${i}`}  product = {prod}/>)}

 </>

) 

}

export default ItemList