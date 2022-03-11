import './styles/App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings="Aca vamos a renderizar nuestros productos"/>
    </div>
  );
}

export default App;
