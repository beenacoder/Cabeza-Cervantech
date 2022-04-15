import { useCartContext } from "../context/CartContext"


const CartItem = ({id, title, price, cantidad}) => {
    const {deleteItem} = useCartContext()
    return ( 
        <div>
            Articulo: {title} - precio: ${price} -  Cantidad: {cantidad} - Sub Total: ${price * cantidad} <button onClick={()=>{deleteItem(id)}}>X</button>    
        </div>
            
     );
}
 
export default CartItem;