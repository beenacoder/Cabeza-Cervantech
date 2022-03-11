import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {
    return (  
        <>
            <a href="#top" className='shoppingCart'><FontAwesomeIcon icon={faCartShopping}/></a>
        </>
    );
}
 
export default CartWidget;

