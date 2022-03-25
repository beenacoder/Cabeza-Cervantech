import ItemList from  './ItemList'      
import { useEffect, useState } from "react"
import {getProducts} from '../dataBase/dataProductos'

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
             {cargando ? <h2>Cargando...</h2> 
             :
             <ItemList productos={productos}/> 
            }
        </div>
        
     );
}
 
export default ItemListContainer;