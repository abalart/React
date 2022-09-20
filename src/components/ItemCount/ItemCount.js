import React, {useEffect, useState} from "react";
import Swal from 'sweetalert2'

const ItemCount = ({stock,initial,onAdd}) => {   //Recibe las 3 props desde ItemListContainer (padre de ItemCount)
    
useEffect(() => {
    console.log("Esto es useEffect")
},[]); 
    
const [contador,setContador] = useState(initial); //Variable,funcion que va a cambiar la variable y el hook con un valor inicial
//Sin el uso de useState React no sabria como reaccionar ante el cambio por un evento.

const agregarProducto = () => {//Defino un evento que sucedera cada vez que clickeo
    contador<stock?setContador(contador+1): Swal.fire('No hay más stock que el seleccionado')
      //Utilizo el setContador para renderizar el cambio, es un error usar variable ++
}

const quitarProducto = () => { 

   contador>0? setContador(contador-1):Swal.fire('El stock no puede ser menor a 0')
}


    return(
        <>
        <div> Producto </div>
         <h1>{contador}</h1>
         <button onClick={agregarProducto}> +</button>
         <button onClick={quitarProducto}> - </button>
         <button onClick={onAdd}> Añadir al carrito </button>
        </>
    ) 

}

export default ItemCount 