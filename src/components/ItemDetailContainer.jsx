import { useEffect, useState } from 'react'
import { getProducts } from '../dataBase/dataProductos'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        getProducts
        .then(resp => setProduct(resp.find(item => item.id === '1')))
        .catch(err => alert("Hubo un error"))
        
    }, [])

    

    return ( 
        <>
            <ItemDetail 
                product = {product}
            />
        </>
     );
}
 
export default ItemDetailContainer;