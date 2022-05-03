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
                        <a href="#top">Inicio</a>
                    </Link>
                    <a href="#top">Quienes Somos</a>
                    <a href="#top">Nuestros Productos</a>      
                </nav>
                
                <NavLink to = '/cart'>
                    <CartWidget />
                </NavLink>
                 
            </div>
        </header>
    );
}
 
export default NavBar;