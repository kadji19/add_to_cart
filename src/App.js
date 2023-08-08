import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
/* import Home from './components/Home';
import Cart from './components/Cart';
import { CartProvider } from "react-use-cart"; */
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Pagination from './components/Pagination';
import Vente from './components/Vente';

function App() {
  return (
    <div className='text-info'>
        <Router>
            <Routes>
              <Route path="/" element={ <Vente /> } />
              <Route path="/pagination" element={ <Pagination /> } />
            </Routes>
          </Router>
    </div>

  );
}

export default App;
