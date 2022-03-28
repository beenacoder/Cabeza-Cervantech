import brand from '../../src/assets/brand.png';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <header>
            <div className="contenedor">
            
                <NavLink className = "brandName" to ='/'>
                   <img src={brand} className="brandLogo" alt="" />
                </NavLink>
            
                <nav className = "menu">
                    <a href="#top">Inicio</a>
                    <a href="#top">Quienes Somos</a>
                    <a href="#top">Nuestros Productos</a>      
                </nav>
                
                <CartWidget />
                
            </div>
        </header>
    );
}
 
export default NavBar;