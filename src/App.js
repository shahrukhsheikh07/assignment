import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';



const App = () => {
  
  return (
    <>
    <Router>
    <Header/>
    <Routes>
    < Route path = "/" element = {<ProductListing />} />
    < Route path = "/product/:productId" element =  {<ProductDetail/>} />
    <Route>404 not Found!</Route>
    </Routes>
    </Router>
    </>
  )
}

export default App;