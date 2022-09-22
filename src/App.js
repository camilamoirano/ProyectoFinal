import './App.css';
import NavBar from './components/NavBar';

import ItemListContainer from "./components/Products/ItemListContainer"
import ItemCount from './components/ItemCount';

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      {/*<ItemListContainer greeting="Ecommerce de Productos de Cerámica"/>*/}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
