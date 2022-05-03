import { useCartContext } from "../context/CartContext"


const CartItem = ({id, title, price, quantity}) => {
    const {deleteItem} = useCartContext()
    return ( 
        <div>
            Articulo: {title} - Precio: ${price} -  Cantidad: {quantity} - Sub Total: ${price * quantity} 
            <button onClick={()=>{deleteItem(id)}}>X</button>    
        </div>
            
     );
}
 
export default CartItem;