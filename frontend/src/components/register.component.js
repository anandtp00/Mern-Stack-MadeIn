import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.component.css';
import axios from 'axios';


export default class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            mobile: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            mobile: this.state.mobile,
        }

        axios.post('http://localhost:4500/adduser',newUser)
        .then(res => {
            console.log(res.data);
            if(res.data.msg == 'Already Exist'){
                alert('User already exist! Please login')
                this.props.history.push('/');
            }
            if(res.data.msg == 'Server Error'){
                  alert('Server Error, Please try again later!')
                this.props.history.push('/');
            }
             if(res.data.status == 'success'){
                this.props.history.push('/home');
            }
        });
        
    }

    render() {
        return (
            <div className="container form-wrapper-register">
                <div className="row">
                    <div className="col-md-12 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="Enter username"
                                    value={this.state.first_name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Mobile Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="mobile"
                                    placeholder="Enter mobile number"
                                    value={this.state.mobile}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-sm btn-primary btn-block"
                            >
                                Register!
                  </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}