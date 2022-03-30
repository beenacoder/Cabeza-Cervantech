import { NavLink } from "react-router-dom";


const Categorias = () => {
    return ( 
        <div className="cat-container">
            <h2>Categorías</h2>
            <ul className="lista-cat">
                <NavLink to = "/category/escritura"> 
                    <li>Escritura</li>
                </NavLink>
                <NavLink to = "/category/borrar">
                    <li>Borrar</li>
                </NavLink>
                <NavLink to = "/category/pegamentos">
                    <li>Pegamentos</li>
                </NavLink>
                <NavLink to = "/category/oficina">
                    <li>Oficina</li>
                </NavLink>
            </ul>
        </div>
     );
}
 
export default Categorias;