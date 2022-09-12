import React from 'react';   
import ItemCount from '../ItemCount/ItemCount';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


//Este componente va a listar los items

const ItemListContainer = ({greeting}) => {  //Este componente recibe la prop "greeting y la muestra con h1"


const productos = [
    {id:1, nombre: "somprero",stock:5},
    {id:2,nombre: "Aros",stock:0},
    {id:2,nombre: "Almohadon",stock:0}
                  ]

function onAdd(){ //Funcion añadir al carrito
 Swal.fire('Producto agregado al carrito')

}

    return(
    <div> 
    <h1>Aqui tendremos las cards de los productos:</h1>  
    <div>
        <ul>
            {productos.map((producto)=>(
                    <li key={producto.id}>
                        {"Nombre: "+producto.nombre} 
                       
                    </li>
            ))}
        </ul>
    </div>
            <h1>{greeting}</h1>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
             <ItemCount stock={0} initial={1} onAdd={onAdd} />
              <ItemCount stock={99999} initial={1} onAdd={onAdd} />
               <ItemCount stock={1} initial={1} onAdd={onAdd} />
           
     </div>
    )
}

export default ItemListContainer  