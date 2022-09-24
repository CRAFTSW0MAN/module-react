import './App.css';
import { Routes, Route } from 'react-router-dom';
import {useSelector} from 'react-redux';
import Basket from './Pages/Basket/Basket.js';
import Authorization from './Pages/Authorization/Authorization.js';
import Registration from './Pages/Registration/Registration.js';
import Product from './Pages/Prosuct/Product';
import NotFound from './Pages/NotFound/NotFound';
import Products from './Pages/Products/Products.js';


function App() {
  const isAuth = useSelector(state => state.user.isAuth);

  return (
    <div>
      <Routes >
      {
        isAuth === false
        ? <>
          <Route path='/' element = {<Authorization/>} />
          <Route path='/registration' element = {<Registration/>} />
          <Route path='*' element = {<NotFound/>} />
        </>
        : <>
          <Route path='/products' element = {<Products/>} /> 
          <Route path='/products/:id' element = {<Product/>} /> 
          <Route path='/basket' element = {<Basket/>} />
          <Route path='*' element = {<NotFound/>} />
        </>
      }
      </Routes>
    </div>
  );
};
export default App;
