import Item from "./Item"


        
const ItemList = ({products}) => {
    return ( 
        <div className="card-contenedor">
            {products.map((prod) => <Item 
                                        prod = {prod}
                                        key={prod.id}
                                    />   
                
            )}
        </div>
     );
}
 
export default ItemList