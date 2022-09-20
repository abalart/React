 import React from 'react';
import Item from '../Item/Item'


 //Este componente recibe un objeto item para extraer de el la info a mostrar en una card por medio de un map

const ItemList = ({listProducts}) => { 
   console.log("ItemList") 
   console.log(listProducts)
   
return(
 <>
  <h1>Esto es ItemList</h1>
  {listProducts.map((prod,i) => <Item key={`$prod.product}-${i}`}  product = {prod}/>) 
 }
  <Item />
 </>

) 

}

export default ItemList