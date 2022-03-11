import brand from '../../src/assets/brand.png';
import CartWidget from './CartWidget';

const NavBar = () => {
    return ( 
        <header>
            <div className="contenedor">
                <div className = "brandName">
                    <img src={brand} className="brandLogo" alt="" />
                </div>
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