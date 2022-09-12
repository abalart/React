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


const ItemCount = ({stock,initial,onAdd}) => {  
    
    
console.log(initial);
console.log(stock);
    
 

const [contador,setContador] = useState(initial); //Variable,funcion que va a cambiar la variable y el hook con un valor inicial

const sumar = () => {//Defino un evento que sucedera cada vez que clickeo
    contador<stock?setContador(contador+1):console.log("No hay stock")
      //Utilizo el setContador para renderizar el cambio, es un error usar variable ++
}

const restar = () => { 

   contador>0? setContador(contador-1):setContador(0) 
}


    return(
        <>
        <div> Contador de productos a comprar </div>
         <h1>{contador}</h1>
         <button onClick={sumar}> +</button>
         <button onClick={restar}> - </button>
         <button onClick={onAdd}> Añadir al carrito </button>
        </>
    ) 

}

export default ItemCount 