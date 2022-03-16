import ItemCount from './ItemCount'



const ItemListContainer = ({greetings}) => {
    return ( 
        <div>
            <h2>Bienvenidos a Librería Cervantes</h2>
             {greetings}   
             <ItemCount stock={10} initial={1}/>
        </div>
        
     );
}
 
export default ItemListContainer;