
import { useCartContext } from "../context/CartContext"

const Cart = () => {
    const {cartList} = useCartContext()

    return (
        <div>
            <h1>Cart</h1>
            {cartList.map(item => <li key={item.id}>
                    Articulo: {item.title} -  Cantidad: {item.cantidad}
                    
            </li>)}
        </div>
    )
}

export default Cart