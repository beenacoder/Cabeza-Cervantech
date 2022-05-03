import {useState} from 'react';
import { Link } from 'react-router-dom';

const AddButton = ({handleButton}) => {
    return (
        <button onClick={handleButton}>Comprar</button>
    )
}

const KeepBuyingButton = () => {
    return (
    <>
        <Link to = '/'>
            <button>Seguir Comprando</button>
        </Link>    
        
        <Link to= '/cart'>
            <button> Ir al carrito</button>
        </Link>    
    </>
    )
}


const ItemCount = ({product, initial, onAdd}) => {
    const [button, setButton] = useState(false)
    const [qnty, setQnty] = useState(initial);
    
    

    
    const handleButton = () => {
        setButton(true)
        onAdd(qnty)
    }



    const addItem = () => {
        if (qnty < product.stock) {
            setQnty(qnty +1)
        } 
    }

    const removeItem = () => {
        if (qnty > 0) {
            setQnty(qnty-1)
        }
    }



    return(
        <div >
            <p>Disponible: {product.stock - qnty}</p>
            <button  onClick={removeItem}>-</button>
            <span> {qnty} </span>
            <button  onClick={addItem}>+</button>
            <br />
            { button === false ?
                <AddButton
             handleButton={handleButton}/>
            :
                <KeepBuyingButton/>
            }
        </div>

    )
}

export default ItemCount;