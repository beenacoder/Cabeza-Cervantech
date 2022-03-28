import { NavLink } from "react-router-dom";


const Categorias = () => {
    return ( 
        <div className="cat-container">
            <h2>Categorías</h2>
            <ul className="lista-cat">
                <NavLink to =''> 
                    <li>Escritura</li>
                </NavLink>
                <NavLink to =''>
                    <li>Borrar</li>
                </NavLink>
                <NavLink to =''>
                    <li>Pegamentos</li>
                </NavLink>
            </ul>
        </div>
     );
}
 
export default Categorias;