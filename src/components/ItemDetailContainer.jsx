import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import '../styles/cargando.css';
import {getFirestore, doc, getDoc} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [cargando, setCargando] = useState(true)

    const {detalleId} = useParams()


    // Creamos una conexion con firestore
     useEffect(() => {
        const querydb = getFirestore()
        const queryProd = doc(querydb, 'productos', detalleId)

        getDoc(queryProd)
        .then(resp => setProduct({id: resp.id, ...resp.data()}))
        .catch(err => alert("Hubo un error"))
        .finally(() => setCargando(false))
    },[detalleId])

    // useEffect(() => {
    //     getProducts
    //     .then(resp => setProduct(resp.find(item => item.id === detalleId)))
    //     .catch(err => alert("Hubo un error"))
    //     .finally(() => setCargando(false))
    // }, [detalleId])

    
    console.log(product)
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