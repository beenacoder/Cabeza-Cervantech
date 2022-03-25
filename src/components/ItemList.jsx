import Item from "./Item"


        
const ItemList = ({productos}) => {
    return ( 
        <div className="card-contenedor">
            {productos.map((prod) => <Item 
                                        prod = {prod}
                                        key={prod.id}
                                    />   
                
            )}
        </div>
     );
}
 
export default ItemList