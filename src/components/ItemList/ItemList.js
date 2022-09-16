/*
ItemList.js Es un agrupador de un set de componentes Item.js (Deberías incluirlo dentro de
ItemListContainer del desafío 3) ok

Implementa un async mock (promise): Usa un efecto de montaje para poder emitir un llamado
asincrónico a un mock (objeto) estático de datos que devuelva un conjunto de item { id, title,
description, price, pictureUrl } en dos segundos (setTimeout), para emular retrasos de red.

Los ítems deben provenir de un llamado a una promise que los resuelva en
tiempo diferido (setTimeout) de 2 segundos, para emular retrasos de red

*/


  
import React from 'react';
import Item from '../Item/Item'



const ItemList = ({items}) => {  //Este componente recibe un objeto item para extraer de el la info a mostrar en una card por medio de un map
    //useEffect
    //<Item title={"Bolsa"} price={500} />


    /*
         <div>
        <ul>
          
             {productos.map(u => <li key={u.id}>{"Nombre: "+u.nombre+" "}{"Stock "+u.stock}</li>)}
        </ul>
    </div>
    
    */

return(
 

  <h1>Esto es ItemList</h1>
    
    
) 

}

export default ItemList