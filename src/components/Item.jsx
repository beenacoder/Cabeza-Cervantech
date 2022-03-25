import '../styles/items.css';


const Item = ({prod}) => {
    return ( 
         <div className = "card">
            <img src = {prod.pictureUrl} alt = ""/>
            <h4>{prod.name}</h4>
            <p>{prod.description}</p>
            <p>${prod.price}</p>
            <button>Detalles</button>
        </div>




            // <div className = "card">
            //     <img src = {pictureUrl} alt = ""/>
            //     <h4>{name}</h4>
            //     <p>{description}</p>
            //     <p>${price}</p>
            //     <button>Detalles</button>
            // </div>
    )
}
 
export default Item;