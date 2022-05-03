import { useCartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import '../styles/itemDetail.css';

const ItemDetail = ({product}) => {

    //Esta es la funcion global que tenemos en CartContext
    const {addToCart} = useCartContext()

    function onAdd(cant) {
        addToCart({...product, quantity: cant})
        
    }

    return ( 
        <div className = "item-detail__container">
            <div className = "item-detail__card">
                <div className="columna">
                    <img src={product.image} alt="" />
                </div>
                <div className="columna">
                    <h1>{product.title}</h1>
                    <h4>${product.price}</h4>
                    
                    <h3>Detalle del Producto</h3>
                    <p className="detail">{product.description}</p>
                    <ItemCount product={product} initial={1} stock = {product.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
     );
}
 
export default ItemDetail;