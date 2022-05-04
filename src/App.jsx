import './styles/App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart';


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>  
        <div className="App">
          <NavBar />
          <Routes>
            <Route
              path="/" 
              element = {<ItemListContainer greetings="Te invito a descubrir nuestros productos!"/>}
            />

          {/* Aqui asociamos la ruta dinamica para las categorias */}
            <Route
              path="/category/:categoryId"
              element = {<ItemListContainer greetings={"Te invito a descubrir nuestros productos!"}/>}
            />

            <Route
              path="/detail/:detailId"
              element = {<ItemDetailContainer/>}
            />

            <Route
              path="/cart"
              element = {<Cart/>}
            />
          </Routes> 
        </div>
      </CartContextProvider>
      
    </BrowserRouter>
  )
}

export default App;
