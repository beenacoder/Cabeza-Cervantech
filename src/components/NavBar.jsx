import { NavLink, Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import brand from '../../src/assets/brand.png';

const NavBar = () => {
    return ( 
        <header>
            <div className="contenedor">
            
                <NavLink className = "brandName" to ='/'>
                   <img src={brand} className="brandLogo" alt="" />
                </NavLink>
            
                <nav className = "menu">
                    <Link to ="/">
                        Inicio
                    </Link>
                    <a href="#top">Quienes Somos</a>
                    <a href="#top">Nuestros Productos</a>      
                </nav>
                
                <div>
                    <NavLink to = '/cart'>
                        <CartWidget />
                    </NavLink>
                </div>
                 
            </div>
        </header>
    );
}
 
export default NavBar;