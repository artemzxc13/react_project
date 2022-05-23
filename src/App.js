import React from 'react';
import Header from './Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content"></div>
      <Route path="/" component={Home} exact />
      <Route path="/cart" component={Cart} exact />
    </div>
  );
}

export default App;
