import React from 'react';   

//Este componente va a listar los items

const ItemListContainer = ({greeting}) => {  //Este componente recibe la prop "greeting y la muestra con h1"
    return(
     <div className="flexbox">   
            <h1>{greeting}</h1>
     </div>
        
    )

}

export default ItemListContainer //Necesario