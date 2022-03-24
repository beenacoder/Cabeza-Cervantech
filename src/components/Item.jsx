import '../styles/items.css';


const Item = ({name, description, price, pictureUrl}) => {
    return ( 
        
            <div className = "card">
                <img src = {pictureUrl} alt = ""/>
                <h4>{name}</h4>
                <p>{description}</p>
                <p>${price}</p>
                <button>Detalles</button>
            </div>
    )
}
 
export default Item;