import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppNavbar from './components/navbar.component';
import Index from './components/index.component';
import Home from './components/home.component';
import ShoppsingList from './components/shoppinglist.component';

function App() {
  return (
    <Router>
      <div>
        <AppNavbar />
        <br />
        <div className="container">
          <Route exact path="/" component={Index} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/services" component={ShoppsingList} />
        </div>
      </div>
    </Router>
  );
}

export default App;
