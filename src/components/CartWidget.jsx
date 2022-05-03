import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../context/CartContext';

function CartWidget () {
    const {itemQnty} = useCartContext()
    return (  
        <>

                
            <span className='shoppingCart'><FontAwesomeIcon icon={faCartShopping}/>
                {itemQnty() > 0 && itemQnty()}
            </span>
            

             
        </>
    );
}
 
export default CartWidget;

