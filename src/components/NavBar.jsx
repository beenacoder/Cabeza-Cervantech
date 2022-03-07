import brand from '../brand.png';

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
            </div>
            
        </header>
    );
}
 
export default NavBar;