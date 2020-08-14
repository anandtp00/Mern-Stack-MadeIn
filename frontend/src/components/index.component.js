import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.component.css';

import Register from './register.component';
import Login from './login.component';

export default class Index extends Component {

    render() {
        return (

            <Router>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card indexcard">
                            <div className="row">
                                <div className="col-md-6">

                                </div>
                                <div className="col-md-6">
                                    <div className="row indexlinks">
                                        <div className="col-md-4">
                                            <Link to="/login">Log In</Link>
                                        </div>
                                        <div className="col-md-4">
                                            <Link to="/register">Register</Link>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="wrapper">
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