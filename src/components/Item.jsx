import '../styles/items.css';
import { Link } from 'react-router-dom';

const Item = ({prod}) => {
    return ( 
        <div className = "card">
            <img src = {prod.image} alt = ""/>
            <h4>{prod.name}</h4>
            <p>{prod.description}</p>
            <p>${prod.price}</p>
            <Link to = {`/detalle/${prod.id}`}>
                <button className='btn-detalle'>Detalles</button>
            </Link>   
        </div>

    )
}
 
export default Item;