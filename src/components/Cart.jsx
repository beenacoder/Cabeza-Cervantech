import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import CartItem from "./CartItem"
import { getFirestore, collection, addDoc  } from 'firebase/firestore'


const Cart = () => {
    const {cartList, emptyCart, totalPrice, itemQnty} = useCartContext()


    const generateOrder = (e) => {
        e.preventDefault();

        let order = {}

        order.buyer = {name: 'Ariel', email: 'ariel@gmail.com', phone: '0303456'}
        order.total = totalPrice()

        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.title
            const precio = cartItem.price * cartItem.cantidad

            return {id, nombre, precio}
        })
        // console.log(order)

        //Creacion de un documento
        const dataBase = getFirestore()
        const queryCollection = collection(dataBase, 'orders')
        addDoc(queryCollection, order)
        .then(resp => console.log(resp))
        .catch(err => "Hubo un error en la pagina")
        .finally(emptyCart)

        //Update, Modificar un archivo
        // const queryUpdate = doc(dataBase, 'productos', '0R4DRUodJsIDYdYdTNIe')
        // updateDoc(queryUpdate, {
        //     stock: 2
        // })

        


    }



    return (
        <div className="cart-container">
            <h1>Cart</h1>
            {cartList.length === 0 ?
                <>
                    <h2>No tienes ningun producto agregado</h2>
                    <Link to = '/'>
                        <button>Llevame al catalogo</button>
                    </Link>
                </>
             : 
                <>
                {cartList.map(item => <CartItem  key={item.id} id= {item.id} title={item.title} price={item.price} cantidad={item.cantidad} />
                                    )}
                    <div>Cantidad total de productos: {itemQnty()}</div>
                    <div>Total a pagar: $ {totalPrice()}</div>                        
                    <button onClick={emptyCart}>Vaciar Carrito</button>
                    <span>-</span>
                    <Link to = '/'>
                    <button>Seguir Comprando</button>
                    </Link>
                    <span>-</span>
                    <button onClick={generateOrder}>Finalizar Compra</button>
                </>
}
        </div>
    )
}

export default Cart