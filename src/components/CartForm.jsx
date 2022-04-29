import '../styles/cartForm.css';
import { getFirestore, collection, addDoc  } from 'firebase/firestore'
import { useState } from "react"
import { useCartContext } from "../context/CartContext"

const CartForm = () => {
    const [dataForm, setDataForm] = useState({name: '', email: '', phone: ''})
    
    
    //Context
    const {cartList, emptyCart, totalPrice} = useCartContext()
    

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

    const handleForm  = (event) => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value 
        })
    }
    return ( 
        <form className='cart-form' onSubmit={generateOrder}>
            <div>
                <label htmlFor="name">Nombre</label>
                <input className='cart-form__input' type="text" name = "name" placeholder="Ingrese aquí su nombre" onChange={handleForm} value={dataForm.name}/>
            </div>
            
            <div>
                <label htmlFor="email">Correo</label>
                <input className='cart-form__input' type="email" name = "email" placeholder="Ingrese aquí su email" onChange={handleForm} value={dataForm.email}/>
                <input className='cart-form__input' type="email" name = "email2" placeholder="Ingrese nuevamente su email"/>
            </div>
            <div>
                <label htmlFor="phone">Telefono</label>
                <input className='cart-form__input' type="number" name = "phone" placeholder="Ingrese aquí su numero de telefono" onChange={handleForm} value={dataForm.phon}/>
            </div>
            <button className='cart-form__btn'>Finalizar Compra</button>
        </form>        
     );
}

export default CartForm;