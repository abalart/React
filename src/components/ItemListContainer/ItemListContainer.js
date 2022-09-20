import React from 'react';   
import ItemCount from '../ItemCount/ItemCount';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import {products} from '../../Assets/productos'
import {customFetch } from '../../utils/customFetch';
import {useEffect,useState} from 'react'
import ItemList from '../ItemList/ItemList';

//Este componente va a listar los items

const ItemListContainer = ({greeting}) => {  //Este componente recibe la prop "greeting y la muestra con h1"


 //Los productos se deben guardar en un estado, para esto se usa el useState
 //Agregar  llamado a  <ItemList/> mediante una promesa con retraso de 2 segundos+ useEffect
   
const [listProducts,setListProducts]  = useState([])

useEffect(() => {
    customFetch(products)
        .then(res => setListProducts(res))
}, [])

console.log(listProducts)

function onAdd(){ //Funcion añadir al carrito
 Swal.fire('Producto agregado al carrito')

}


    return(
    <div> 
        <h1>Aqui tendremos las cards de los productos:</h1>  
    <div>
         
    </div>
            <h1>{greeting}</h1>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
            <ItemList listProducts={listProducts}/> 

           
     </div>
    )
}

export default ItemListContainer  