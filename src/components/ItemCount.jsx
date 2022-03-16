
import {useState} from 'react';

const ItemCount = ({ itemName, initial, stock}) => {
    
    const [qnty, setQnty] = useState(initial);
        

    const addItem = (qty) => {
        if (qnty < stock) {
            setQnty(qty)
        } 
    }

    const removeItem = (qty) => {
        if (qnty > 0) {
            setQnty(qty)
        }
    }



    return(
        <div >
            <h2>Producto: {itemName}</h2>
            <h3>Stock: {stock - qnty}</h3>
            <button  onClick={() =>removeItem(qnty - 1)}>Quitar</button>
            <span> {qnty} </span>
            <button  onClick={() =>addItem(qnty + 1)}>Agregar</button>
            <br />
            <button>Agregar al carrito</button>
        </div>

    )
}

export default ItemCount;