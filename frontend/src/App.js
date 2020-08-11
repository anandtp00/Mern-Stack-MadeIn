import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar.component';
import Index from './components/index.component';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <br />
        <div className="container">
          <Route exact path="/" component={Index} />
        </div>
      </div>
    </Router>
  );
}

export default App;
