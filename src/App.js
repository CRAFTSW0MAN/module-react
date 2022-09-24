import './App.css';
import { Routes, Route } from 'react-router-dom';
import Basket from './Pages/Basket/Basket.js';
import Authorization from './Pages/Authorization/Authorization.js';
import Registration from './Pages/Registration/reg/reg.js';
import Product from './Pages/Prosuct/Product';
import NotFound from './Pages/NotFound/NotFound';
import Products from './Pages/Products/Products.js'

function App() {
  return (
    <div>
    <Routes >
      <Route path='/' element = {<Authorization/>} />
      <Route path='/Registration' element = {<Registration/>} /> 
      <Route path='/Products' element = {<Products/>} /> 
      <Route path='/products/:id' element = {<Product/>} /> 
      <Route path='/basket' element = {<Basket/>} />
      <Route path='*' element = {<NotFound/>} />
    </Routes>
    </div>
  );
}
export default App;
