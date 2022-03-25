import ItemList from  './ItemList'      
import { useEffect, useState } from "react"
import {getProducts} from '../dataBase/dataProductos'

const ItemListContainer = ({greetings}) => {
    const [productos, setProductos] = useState([])

    //Si no usamos useEffect va a llamarse primero (antes que el render) y va a bloquear el rendering en caso de tardios
    //Con el array vacio llamamos una sola vez a la API despues del renderizado o montado del componente
    useEffect(() => {
        getProducts.then(resp => setProductos(resp))
    }, [])


    return ( 
        <div>
            <h2>Bienvenidos a Librería Cervantes</h2>
             {greetings}  
             <ItemList productos={productos}/> 
            
        </div>
        
     );
}
 
export default ItemListContainer;