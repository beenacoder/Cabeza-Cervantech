import ItemList from  './ItemList'      
import { Fragment, useEffect, useState } from "react"
import Categorias from './Categorias';
import { useParams } from 'react-router-dom';
import {getFirestore,  collection, getDocs, query, where} from 'firebase/firestore'
import '../styles/cargando.css';
import '../styles/categorias.css';

const ItemListContainer = ({greetings}) => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    //Hook de React router dom para obtener el parametro de la ruta
    const {categoryId} = useParams()
    
     //Creamos una conexion con firestore
     useEffect(() => {
        if (categoryId) {
            const querydb = getFirestore()
            const queryCollection = collection(querydb, 'productos')
            const queryFilter = query(queryCollection, where('categoryId', '==', categoryId))
            getDocs(queryFilter)
            .then(resp => setProductos(resp.docs.map(item => ({id: item.id, ...item.data()}))))
            .catch(err => alert("Hubo un error"))
            .finally(() => setCargando(false))
        } else {
            const querydb = getFirestore()
            const queryCollection = collection(querydb, 'productos')
            getDocs(queryCollection)
            .then(resp => setProductos(resp.docs.map(item => ({id: item.id, ...item.data()}))))
            .catch(err => alert("Hubo un error"))
            .finally(() => setCargando(false))
        }
    },[categoryId])

    return ( 
        <Fragment>
            <h2>Bienvenidos a Librería Cervantes</h2>
            {greetings}  
            <div className = "cat-items-container">   
                <Categorias/>
            
                {cargando ?  <div className="cargando"></div>           
                :
                <ItemList productos={productos}/> 
                }
            </div>
        </Fragment>
                      
        
     );
}
 
export default ItemListContainer;