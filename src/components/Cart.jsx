import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import CartItem from "./CartItem"
import { getFirestore, collection, addDoc  } from 'firebase/firestore'
import { useState } from "react"
import CartForm from "./CartForm"


const Cart = () => {
    const [dataForm, setDataForm] = useState({name: '', email: '', phone: ''})
    const [fillForm, setFillForm] = useState(false)


    const {cartList, emptyCart, totalPrice, itemQnty} = useCartContext()

    const generateOrder = (e) => {
        e.preventDefault();
        const dataBase =  getFirestore()
        const queryCollection = collection(dataBase, 'orders')
        //Aca vamos a crear las validaciones para el formulario

        let order = {}

        order.buyer = dataForm
        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.title
            const precio = cartItem.price * cartItem.cantidad

            return {id, nombre, precio}
        })
        order.total = totalPrice()
        console.log(order)

        //Creacion de un documento
        
        addDoc(queryCollection, order)
        .then(({ id }) => alert(`Muchas gracias por su compra, su id de compra es:  ${id}`))
        .catch((err) => console.log(err))
        .finally(emptyCart) 

        //Update, Modificar un archivo
        // const queryUpdate = doc(dataBase, 'productos', '0R4DRUodJsIDYdYdTNIe')
        // updateDoc(queryUpdate, {
        //     stock: 2
        // })  
    }

    const handleFill = () => {
        setFillForm(true)
    }

    const handleForm  = (event) => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value 
        })
    }
    console.log(dataForm)
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