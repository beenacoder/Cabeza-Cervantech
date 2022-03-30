import ItemList from  './ItemList'      
import { Fragment, useEffect, useState } from "react"
import {getProducts} from '../dataBase/dataProductos'
import '../styles/cargando.css';
import '../styles/categorias.css';
import Categorias from './Categorias';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greetings}) => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    //Hook de React router dom para obtener el parametro de la ruta
    const {categoryId} = useParams()
    
    
    //Si no usamos useEffect va a llamarse primero (antes que el render) y va a bloquear el rendering en caso de tardios
    //Con el array vacio llamamos una sola vez a la API despues del renderizado o montado del componente
    useEffect(() => {
        categoryId 
        ? 
        getProducts
        .then(resp => setProductos(resp.filter(produ => produ.category === categoryId)))
        .catch(err => alert("Hubo un error"))
        .finally(() => setCargando(false))
        : 
        getProducts
        .then(resp => setProductos(resp))
        .catch(err => alert("Hubo un error"))
        .finally(() => setCargando(false))
    }, [categoryId])

    console.log(categoryId)
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