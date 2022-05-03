import { Link } from 'react-router-dom';
import '../styles/items.css';

const Item = ({prod}) => {
    return ( 
        <div className = "card">
            <img src = {prod.image} alt = ""/>
            <h4>{prod.name}</h4>
            <p>{prod.description}</p>
            <p>${prod.price}</p>
            <Link to = {`/detail/${prod.id}`}>
                <button className='btn-detalle'>Detalles</button>
            </Link>   
        </div>

    )
}
 
export default Item;