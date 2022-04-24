import '../styles/cartForm.css';


const CartForm = ({handleForm, dataForm, generateOrder}) => {
    return ( 
        <form className='cart-form' onSubmit={generateOrder}>
                    <input className='cart-form__input' type="text" name = "name" placeholder="Ingrese aquí su nombre" onChange={handleForm} value={dataForm.name}/>
                    <input className='cart-form__input' type="email" name = "email" placeholder="Ingrese aquí su email" onChange={handleForm} value={dataForm.email}/>
                    <input className='cart-form__input' type="email" name = "email" placeholder="Ingrese aquí su email" onChange={handleForm} value={dataForm.email}/>
                    <input className='cart-form__input' type="number" name = "phone" placeholder="Ingrese aquí su numero de telefono" onChange={handleForm} value={dataForm.phon}/>

                    <button className='cart-form__btn'>Finalizar Compra</button>

                </form>        
     );
}
 
export default CartForm;