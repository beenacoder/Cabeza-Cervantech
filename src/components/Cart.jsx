import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"

const Cart = () => {
    const {cartList, emptyCart} = useCartContext()

    return (
        <div>
            <h1>Cart</h1>
            {cartList.map(item => <li key={item.id}>
                                        Articulo: {item.title} -  Cantidad: {item.cantidad}
                                    </li>)}
            <button onClick={emptyCart}>Vaciar Carrito</button>
            <span>-</span>
            <Link to = '/'>
            <button>Seguir Comprando</button>
            </Link>
        </div>
    )
}

export default Cart