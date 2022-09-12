import React from 'react';   
 

//Este componente va a listar los items

const ItemListContainer = ({greeting}) => {  //Este componente recibe la prop "greeting y la muestra con h1"


const productos = [
    {id:1, nombre: "somprero",stock:5},
    {id:2,nombre: "aros",stock:0}
                  ]

    return(
    <div> 
    <h1>Productos:</h1>  
    <div>
        <ul>
            {productos.map((producto)=>(
                    <li key={producto.id}>
                        {"Nombre: "+producto.nombre} 
                        {"Stock: "+producto.stock} 
                    </li>
            ))}
        </ul>
    </div>
            <h1>{greeting}</h1>
           
     </div>
    )
}

export default ItemListContainer  