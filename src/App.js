import './App.css';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.css";

import ItemListContainer from "./components/Products/ItemListContainer";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';




function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Productos Disponibles"/>}/>
        <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
        <Route path="/categoria/:cat" element={<ItemListContainer/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 