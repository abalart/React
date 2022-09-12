/*
>> A tener en cuenta:
- El número contador nunca puede superar el stock disponible
- De no haber stock el click no debe tener efecto y por ende no ejecutar el callback onAdd
- Si hay stock al clickear el botón se debe ejecutar onAdd con un número que debe ser la
cantidad seleccionada por el usuario.
Detalle importante: como sabes, todavía no tenemos nuestro detalle de ítem, y este desarrollo es
parte de él, así que por el momento puedes probar e importar este componente dentro del
ItemListContainer, sólo a propósitos de prueba. Después lo sacaremos de aquí y lo incluiremos
en el detalle del ítem.

>> Ejemplo inicial:
stock se pasa harcodeado desde el componente padre de itemCount lo mismo initial y OnAdd es una funcion que tambien sera prop
onAdd=Agregar al carrito , va a ser una funcion que ejecute por ej un console.log

function ItemCount({ stock, initial, onAdd }) {
// Desarrollar lógica
}
- Adicionalmente tendremos un número inicial (initial) de cantidad de ítems, de tal modo que si lo
invoco del siguiente modo:
<ItemCount stock=”5” initial=”1” />
debería ver el contador inicializado en 1 por defecto

*/

import React, {useState} from "react";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

const ItemCount = ({stock,initial,onAdd}) => {   //Recibe las 3 props desde MiApp
    
    
const [contador,setContador] = useState(initial); //Variable,funcion que va a cambiar la variable y el hook con un valor inicial

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