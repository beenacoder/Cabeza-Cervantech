import { Fragment, useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import {getFirestore,  collection, getDocs, query, where} from 'firebase/firestore'
import ItemList from  './ItemList'      
import Categorias from './Categorias';
import '../styles/cargando.css';
import '../styles/categorias.css';

const ItemListContainer = ({greetings}) => {
    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(true)

    //Hook de React router dom para obtener el parametro de la ruta
    const {categoryId} = useParams()
    
     //Creamos una conexion con firestore
     useEffect(() => {
        
            const querydb = getFirestore()
            const queryCollection = collection(querydb, 'productos')
            const queryFilter = categoryId ? 
                                    query(queryCollection, 
                                        where('categoryId', '==', categoryId))
                                    :
                                    queryCollection

            getDocs(queryFilter)
            .then(resp => setproducts(resp.docs.map(item => ({id: item.id, ...item.data()}))))
            .catch(err => alert("Hubo un error"))
            .finally(() => setloading(false))
    },[categoryId])

    return ( 
        <Fragment>
            <h2>Bienvenidos a Librería Cervantes</h2>
            {greetings}  
            <div className = "cat-items-container">   
                <Categorias/>
            
                {loading ?  <div className="cargando"></div>           
                :
                <ItemList products={products}/> 
                }
            </div>
        </Fragment>
                      
        
     );
}
 
export default ItemListContainer;