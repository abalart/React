import React,{useState,useContext} from 'react'; //Hago un hook personalizadzado llamado useContect
//Children hace que todo lo que sea hijo,
// todo lo anidado que pase por provider va a pasar por este cartContext.provider
export const CartContext = React.createContext([])  //Creo contexto con valor por defecto []


export const useCartContext = () => useContext(CartContext); //Con esto evito tener que importar el hook y el context en otro componente

//Aplicar logica del carrito en este componente

const CartProvider = ({ children }) => {

    const [cart,setCart] = useState([]);
    const [qty, setQty] = useState(0);
    const [total, setTotal] = useState(0);

    //Desarrollo de funciones agregar,quitar,etc



    const clearCart = () => setCart([]) 

    const isInCart = (id) => cart.find(product => product.id === id)? true:false;

    const removeCart = (id) => setCart(cart.filler(product => product.id !== id))

    const addProduct = (product, qtyProduct) => {  //Esta funcion la tiene que tener itemDetail en su boton, pasandolo por contexto
    if (isInCart(product.id)) {
      setCart(
        cart.map((item) => {
          if (item.product.id === product.id) {
            return {
              product: item.product,
              qtyProduct: item.qtyProduct + qtyProduct,
            };
          }
          return item;
        })
      );
    } else {
      setCart([...cart, { product, qtyProduct }]);
    }
    setQty(qty + qtyProduct);
    setTotal(total + ( qtyProduct * product.price ));
  };

  console.log('carrito',cart)


  
    return(
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeCart,
        addProduct
    }}>  
    {children}
    </CartContext.Provider>
    )
 }

 export default CartProvider


 
