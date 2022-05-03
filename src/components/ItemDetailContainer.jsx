import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import '../styles/cargando.css';
import {getFirestore, doc, getDoc} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setloading] = useState(true)

    const {detalleId} = useParams()


    // Creamos una conexion con firestore
     useEffect(() => {
        const querydb = getFirestore()
        const queryProd = doc(querydb, 'productos', detalleId)

        getDoc(queryProd)
        .then(resp => setProduct({id: resp.id, ...resp.data()}))
        .catch(err => alert("Hubo un error"))
        .finally(() => setloading(false))
    },[detalleId])

    return ( 
        <>
            {loading ?  <div className="cargando"></div>
            :
            <ItemDetail product = {product}/>
            }
        </>
     );
}
 
export default ItemDetailContainer;