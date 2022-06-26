import React from 'react';
import { BrowserRouter as Router, Switch , Router , Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';


const App = () => {
  return (
    <>
    <Router>
    <Header/>
    <Switch>
    < Route path = "/" exact component = {ProductListing} />
    < Route path = "/product/:productid" exact component = {ProductDetail} />
    <Route>404 not Found!</Route>
    </Switch>
    </Router>
    </>
  )
}

export default App;