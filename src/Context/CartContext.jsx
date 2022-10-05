import React,{useState} from 'react';
//Children hace que todo lo que sea hijo,
// todo lo anidado que pase por provider va a pasar por este cartContext.provider
export const CartContext = React.createContext([])  //Creo contexto con valor por defecto []

//Aplicar logica del carrito en este componente

const CartProvider = ({ children }) => {

    const [cart,setCart] = useState([]);

    const clearCart = setCart([]) 

    const isInCart = (id) => cart.find(product => product.id === id)? true:false;

    const removeCart = (id) => setCart(cart.filler(product => product.id !== id))





    return(
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeCart
    }}>{children}</CartContext.Provider>
    )
 }

 export default CartProvider


 
