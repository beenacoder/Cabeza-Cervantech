import './styles/App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/" 
            element = {<ItemListContainer greetings="Aca vamos a renderizar nuestros productos"/>}
          />
        
        {/* Aqui asociamos la ruta dinamica para las categorias */}
          <Route
            path="/category/:categoryId"
            element = {<ItemListContainer greetings={"Aca vamos a renderizar nuestros productos"}/>}
          />
          
          <Route
            path="/detalle/:detalleId"
            element = {<ItemDetailContainer/>}
          />
            
        </Routes> 
      </div>
    </BrowserRouter>
  )
}

export default App;
