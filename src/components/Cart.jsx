import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import CartItem from "./CartItem"
import { useState } from "react"
import CartForm from "./CartForm"


const Cart = ({handleForm, dataForm, generateOrder}) => {
    const [fillForm, setFillForm] = useState(false)
    const {cartList, emptyCart, totalPrice, itemQnty} = useCartContext()

    const handleFill = () => {
        setFillForm(true)
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
                    <button onClick={handleFill}>Proceder con la compra</button>
                    
                </>
            }

               {cartList.length !== 0 && fillForm === true &&
                <>
                    <CartForm handleForm={handleForm} dataForm={dataForm} generateOrder={generateOrder}/>
                </>}
        </div>
    )
}

export default Cart