import ItemList from  './ItemList'      


const ItemListContainer = ({greetings}) => {
    return ( 
        <div>
            <h2>Bienvenidos a Librería Cervantes</h2>
             {greetings}  
             <ItemList/> 
            
        </div>
        
     );
}
 
export default ItemListContainer;