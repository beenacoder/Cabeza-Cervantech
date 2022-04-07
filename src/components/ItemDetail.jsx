import { useCartContext } from '../context/CartContext';
import '../styles/itemDetail.css';
import ItemCount from './ItemCount';

const ItemDetail = ({product}) => {

    //Esta es la funcion global que tenemos en CartContext
    const {addToCart, cartList} = useCartContext()

    function onAdd(cant) {
        addToCart({...product, cantidad: cant})
    }

    console.log(cartList)
    return ( 
        <div className = "item-detail__container">
            <div className = "item-detail__card">
                <div className="columna">
                    <img src={product.pictureUrl} alt="" />
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