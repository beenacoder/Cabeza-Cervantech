import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../dataBase/dataProductos'
import ItemDetail from './ItemDetail'
import '../styles/cargando.css';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [cargando, setCargando] = useState(true)

    const {detalleId} = useParams()

    useEffect(() => {
        getProducts
        .then(resp => setProduct(resp.find(item => item.id === detalleId)))
        .catch(err => alert("Hubo un error"))
        .finally(() => setCargando(false))
    }, [detalleId])

    
    // console.log(detalleId)
    return ( 
        <>
            {cargando ?  <div className="cargando"></div>
            :
            <ItemDetail product = {product}/>
            }
        </>
     );
}
 
export default ItemDetailContainer;