import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (  
        <>
            <Link to = '/cart'>
                <span className='shoppingCart'><FontAwesomeIcon icon={faCartShopping}/></span>
            </Link>
        </>
    );
}
 
export default CartWidget;

