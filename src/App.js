import './App.css';
import NavBar from './components/NavBar';

import ItemListContainer from "./components/Products/ItemListContainer"


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Ecommerce de Productos de Cerámica"/>
    </div>
  );
}

export default App;
