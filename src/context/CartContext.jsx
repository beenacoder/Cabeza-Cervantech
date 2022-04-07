import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

//Inicializamos aca useContext para solo exportar e importar uno solo
export const useCartContext = () => useContext(CartContext)



//En este componente vamos a crear todos los estados y funciones globales, de esta forma enmascaramos y abstraemos context
function CartContextProvider({children}) { //Componente
    const [cartList, SetCartList] = useState([])


    const addToCart = (item) => {
        SetCartList([...cartList, item])
    }

   

    //Inyectamos en value los estados y funciones que van a ser globales.
    //Los estados arriba, las funciones debajo.
    return (
        <CartContext.Provider value = {{
            cartList,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider