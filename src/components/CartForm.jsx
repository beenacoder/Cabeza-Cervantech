import { getFirestore, collection, addDoc  } from 'firebase/firestore'
import { useCartContext } from "../context/CartContext"
import { Formik } from 'formik';
import '../styles/cartForm.css';

const CartForm = () => {

    //Context
    const {cartList, emptyCart, totalPrice} = useCartContext()

    return ( 
    //CREO Y VALIDO EL FORMULARIO CON FORMIK
       <Formik
            initialValues={{
                name: '',
                email: '',
                email2:'',
                phone: ''
            }}
            
            validate = {(formData)=>{
                let err = {} 

                //Validacion del nombre
               if(!formData.name) {
                err.name="ingresa nombre"
                } else if(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(formData.name)){
                    err.name = "El nombre solo puede contener letras y espacios"
                }

                //Validacion del correo
                if(!formData.email) {
                    err.email="Por favor ingresa un correo"
                    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(formData.email)){
                        err.email = "Ingresa un email valido (letras, numeros, puntos, guion bajo, guion medio)"
                    } else if(formData.email !== formData.email2){
                        err.email2 = "Los correos no coinciden"        
                    }
                    
                //Validacion del telefono
                if(!formData.phone) {
                    err.phone = "Por favor ingresa un numero de telefono"
                }
                return err
            }}

            onSubmit={(formData) => {
                
                    const dataBase =  getFirestore()
                    const queryCollection = collection(dataBase, 'orders')

                    let order = {}

                    order.buyer = formData
                    order.items = cartList.map(cartItem => {
                        const id = cartItem.id
                        const nombre = cartItem.title
                        const precio = cartItem.price * cartItem.quantity

                        return {id, nombre, precio}
                    })
                    order.total = totalPrice()

                    //Creacion de un documento en Firebase
                    
                    addDoc(queryCollection, order)
                    .then(({ id }) => alert(`Muchas gracias por su compra, su id de compra es:  ${id}`))
                    .catch((err) => console.log(err))
                    .finally(emptyCart) 

                    //Update, Modificar un archivo
                    // const queryUpdate = doc(dataBase, 'productos', '0R4DRUodJsIDYdYdTNIe')
                    // updateDoc(queryUpdate, {
                    //     stock: 2
                    // }) 
                
            }}
       >
            {({handleSubmit, values, touched, errors, handleChange, handleBlur,}) => (
                <form className='cart-form' onSubmit={handleSubmit}> 
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <input 
                            className='cart-form__input' 
                            type="text" 
                            name = "name" 
                            placeholder="Ingrese aquí su nombre" 
                            value= {values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                        {touched.name && errors.name && <div className = "error">{errors.name}</div>}
                    </div>

                    <div>
                        <label htmlFor="email">Correo</label>
                        <input 
                            className='cart-form__input' 
                            type="email" 
                            name = "email" 
                            placeholder="Ingrese aquí su email" 
                            value= {values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                         />
                        {touched.email && errors.email && <div className = "error">{errors.email}</div>}
                        <input 
                            className='cart-form__input' 
                            type="email" 
                            name = "email2" 
                            placeholder="Ingrese nuevamente su email"
                            value= {values.email2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.email2 && errors.email2 && <div className = "error">{errors.email2}</div>}
                    </div>
                    <div>
                        <label htmlFor="phone">Telefono</label>
                        <input 
                            className='cart-form__input' 
                            type="number" 
                            name = "phone" 
                            placeholder="Ingrese aquí su numero de telefono" 
                            value= {values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.phone && errors.phone && <div className = "error">{errors.phone}</div>}
                    </div>
                    <button type="submit" className='cart-form__btn'>Finalizar Compra</button>
            </form> 
            )}
       </Formik>       
     )
}

export default CartForm;