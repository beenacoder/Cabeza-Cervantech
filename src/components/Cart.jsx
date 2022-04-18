import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import CartItem from "./CartItem"

const Cart = () => {
    const {cartList, emptyCart, totalPrice, itemQnty} = useCartContext()

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
                </>
}
        </div>
    )
}

export default Cart