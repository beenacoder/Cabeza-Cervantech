import ItemList from  './ItemList'      
import { useEffect, useState } from "react"
import {getProducts} from '../dataBase/dataProductos'
import '../styles/cargando.css';
import ItemDetailContainer from './ItemDetailContainer';

const ItemListContainer = ({greetings}) => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    //Si no usamos useEffect va a llamarse primero (antes que el render) y va a bloquear el rendering en caso de tardios
    //Con el array vacio llamamos una sola vez a la API despues del renderizado o montado del componente
    useEffect(() => {
        getProducts
        .then(resp => setProductos(resp))
        .catch(err => alert("Hubo un error"))
        .finally(() => setCargando(false))
    }, [])


    return ( 
        <div>   
            <h2>Bienvenidos a Librería Cervantes</h2>
            {greetings}  
            
            {cargando ?  <div className="cargando"></div>           
             :
             <ItemList productos={productos}/> 
            }
           
            <ItemDetailContainer/>    
        </div>
                      
        
     );
}
 
export default ItemListContainer;