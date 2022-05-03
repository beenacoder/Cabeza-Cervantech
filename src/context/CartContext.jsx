import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

//Inicializamos aca useContext para solo exportar e importar uno solo
export const useCartContext = () => useContext(CartContext)



//En este componente vamos a crear todos los estados y funciones globales, de esta forma enmascaramos y abstraemos context
function CartContextProvider({children}) { //Componente
    const [cartList, SetCartList] = useState([])
    const [qntyItem, setQntyItem] = useState(0)


   //Funcion para agregar productos al carrito y para modificar unicamente la cantidad
    const addToCart = (item) => {
        const isInCart = cartList.find(itm => itm.id === item.id)
        if(isInCart === undefined) {
            SetCartList([...cartList, item])
        } else {
            const newCart = [...cartList]
            const findInCart = newCart.filter(prod => {
                return prod.id === item.id
            }).length > 0
            if(findInCart){
                newCart.forEach((produ, index)=>{
                    if (produ.id === item.id) {
                        const quant = newCart[index].quantity
                        newCart[index] = {
                            id: item.id,
                            title: item.title,
                            category: item.category,
                            description: item.description,
                            price: item.price,
                            pictureUrl: item.pictureUrl,
                            quantity: item.quantity + quant

                        }
                    } 
                })
            }
            SetCartList(newCart)
        }
    }
//Funcion para la cantidad de items en el carrito
    const itemQnty = () => {
        setQntyItem(cartList.reduce((acum, itm) => acum += itm.quantity, 0))
        return qntyItem
    }

//Funcion para el precio total
    const totalPrice = () => {
        return cartList.reduce((acum, itm) => acum + (itm.quantity * itm.price), 0)
    }

//Funcion de elimitar Item del carrito
    const deleteItem = (id) => {
        const deletedItem = cartList.filter(itm => itm.id !== id)
        SetCartList(deletedItem)
    }

//Funcion para vaciar el carrito
    const emptyCart = () => {
        SetCartList([])
    }
   

    //Inyectamos en value los estados y funciones que van a ser globales.
    //Los estados arriba, las funciones debajo.
    return (
        <CartContext.Provider value = {{cartList, addToCart, deleteItem, emptyCart, totalPrice, itemQnty}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider