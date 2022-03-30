import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../dataBase/dataProductos'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})


    const {detalleId} = useParams()

    useEffect(() => {
        getProducts
        .then(resp => setProduct(resp.find(item => item.id === detalleId)))
        .catch(err => alert("Hubo un error"))
    }, [detalleId])

    
    console.log(detalleId)
    return ( 
        <>
            <ItemDetail 
                product = {product}
            />
        </>
     );
}
 
export default ItemDetailContainer;