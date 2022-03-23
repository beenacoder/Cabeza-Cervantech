import ItemCount from './ItemCount'
import ItemList from  './ItemList'      


const ItemListContainer = ({greetings}) => {
    return ( 
        <div>
            <h2>Bienvenidos a Librería Cervantes</h2>
             {greetings}  
             <ItemList/> 
             <ItemCount stock={10} initial={1}/>
        </div>
        
     );
}
 
export default ItemListContainer;