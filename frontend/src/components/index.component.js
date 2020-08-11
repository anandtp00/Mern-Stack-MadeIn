import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Register from './register.component';
import Login from './login.component';

export default class Index extends Component {

    render() {
        return (

            <Router>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-6">

                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Link to="/login" className="nav-link">Log In</Link>
                                        </div>
                                        <div className="col-md-6">
                                            <Link to="/register" className="nav-link">Register</Link>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="container">
                                                <Route exact path="/register" component={Register} />
                                                <Route exact path="/login" component={Login} />
                                                <Route exact path="/" component={Login} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}