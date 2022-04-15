import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import CartItem from "./CartItem"

const Cart = () => {
    const {cartList, emptyCart} = useCartContext()

    return (
        <div>
            <h1>Cart</h1>
            {cartList.map(item => <CartItem  key={item.id} title={item.title} price={item.price} cantidad={item.cantidad} />
                                    )}
                                    
            <button onClick={emptyCart}>Vaciar Carrito</button>
            <span>-</span>
            <Link to = '/'>
            <button>Seguir Comprando</button>
            </Link>
        </div>
    )
}

export default Cart