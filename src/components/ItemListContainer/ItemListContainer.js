import React from 'react';   
import ItemCount from '../ItemCount/ItemCount';
import Swal from 'sweetalert2'
import {products} from '../../Assets/productos' //Traigo los productos a mostrar desde este archivo
import {customFetch } from '../../utils/customFetch';
import {useEffect,useState} from 'react'
import ItemList from '../ItemList/ItemList';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';

//Este componente va a listar los items

const ItemListContainer = () => {  //Este componente recibe la prop "greeting y la muestra con h1"
 //Los productos se deben guardar en un estado, para esto se usa el useState
 //Agregar  llamado a  <ItemList/> mediante una promesa con retraso de 2 segundos+ useEffect


 let {idCategoria} = useParams();   //Esto provoca que el componente sepa que traer, segun la categoria
   
const [listProducts,setListProducts]  = useState([])
const [loading, setLoading] = useState(true)

const URL_CATEGORY = 'https://fakestoreapi.com/products/category'
const BASE = 'https://fakestoreapi.com/products'




useEffect(() => {
    setLoading(true)
    customFetch(products)  //Llama local al archivo con array de products (trae todo el array)
        .then(res => {
            setLoading(false)
            setListProducts(res)
            })                        
}, []) //Pasandole el array de dependencias el efecto se ejecuta 1 sola vez

function onAdd(){ //Funcion añadir al carrito
 Swal.fire('Producto agregado al carrito')
}
    return(

    <>
    <div> 
        <h1></h1>  
    <div>
    </div>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
            {
            loading ?
           <CircularProgress style={{    display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"}}/>
                 :
               <div style={{    display: "flex",
                                 justifyContent: "center"
                                         }}>
                 <ItemList  listProducts={listProducts}/> 
               </div> 
            }
     </div>
     </>
    )
}

export default ItemListContainer  