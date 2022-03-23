import { useEffect, useState } from "react"
import Item from "./Item"
import {listaProductos} from  '../dataBase/dataProductos'

    

    

        
        
const ItemList = () => {
    const [productos, setProductos] = useState([])

    const getProducts = new Promise((res, rej)=>{
    let condition = true
    
    condition ? setTimeout(() => res(listaProductos), 2000) : rej("404 not found")})


    //Si no usamos useEffect va a llamarse primero (antes que el render) y va a bloquear el rendering en caso de tardios
    //Con el array vacio llamamos una sola vez a la API despues del renderizado o montado del componente
    useEffect(() => {
        getProducts.then(resp => {
            setProductos(resp)
        })
    },[])


    return ( 
        <div className="card-contenedor">
            {productos.map((prod) => {
                return (
                        <Item 
                            key={prod.id}
                            name={prod.title}
                            description={prod.description}
                            price={prod.price}
                            pictureUrl={prod.pictureUrl}
                        />
                )
            })}
        </div>
     );
}
 
export default ItemList;