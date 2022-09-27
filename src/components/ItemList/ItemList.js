import React from 'react';
import Item from '../../components/Item/Item'
import {Stack,Text} from '@chakra-ui/react'
//Este componente recibe un objeto item para extraer de el la info a mostrar en una card por medio de un map
 
const ItemList = ({products}) => { 
    

return (
        <div style={styles.container}>
            {products.map((product) =>
                <Item key={product.id} product={product} />
            )}
        </div>
    )

}

const styles = {
    container:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
    }
  }

export default ItemList


