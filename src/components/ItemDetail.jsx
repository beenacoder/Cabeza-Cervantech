import '../styles/itemDetail.css';

const ItemDetail = ({product}) => {
    return ( 
        <div className = "item-detail__container">
            <div className = "item-detail__card">
                <div className="columna">
                    <img src={product.pictureUrl} alt="" />
                </div>
                <div className="columna">
                    <h1>{product.title}</h1>
                    <h4>${product.price}</h4>
                    <a href="#top" className="btn">Lo Quiero</a>
                    <h3>Detalle del Producto</h3>
                    <p className="detail">{product.description}</p>
                </div>
            </div>
        </div>
     );
}
 
export default ItemDetail;