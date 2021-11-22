import React from 'react';
import './App.css';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { Route, Routes} from 'react-router-dom';
import data from './data';
import PersonInformation from './pages/PersonInformation'

function App() {
  
  const {products} = data;



  return (
  
  
    <Routes>
      <Route exact path='/' element={ <Home/>} />
      <Route  path='/checkout' element={ <Checkout products = {products}/>} />
      <Route path='/menu' element={ <Menu/>} />
      <Route path="/personinformation" element={<PersonInformation/>} />
      <Route path='/error' element={ <Error/>} />
    </Routes> 
  );
}

export default App;
