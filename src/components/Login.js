import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import UserStore from '../stores/UserStore';

import * as UserActions from '../actions/UserActions';

import MainNavBar from './MainNavBar';
import Jumbotron from './Jumbotron';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username : '',
            password : '',
            failedValidation : false
        }
    }

    componentDidMount() {
        UserStore.on("user_logged_in", () => {
            let curUser = UserStore.getCurrentUser();
            this.props.history.push( {
                pathname : '/dashboard',
                state : {
                    user : curUser
                }
            });
        });

        UserStore.on("user_failed_validation", () => {
            this.setState( { failedValidation : true });
        })
    }

    onUserNameChange(event) {
        console.log(event.target.value);
        this.setState( { username : event.target.value });
    }

    onPasswordChange(event) {
        console.log(event.target.value);
        this.setState( { password : event.target.value });
    }

    onLoginPressed() {
        if (this.state.username != "" && 
            this.state.password != "")
            UserActions.validateUserLogin(this.state.username, this.state.password);
        else
            UserActions.validateUserLogin("user_1@gmail.com", "password");
    }

    failedValidationMessage() {
        if (this.state.failedValidation) {
            return (
                <p className='error'>Validation Failed. Please check your email and password.</p>
            )
        }
    }

    render() {
        return (
            <section>
                {/*<MainNavBar />
                <Jumbotron />*/}
                <div className='container'>
                <div className='row'>
                <div className='col-sm-12 col-md-6 col-md-offset-3'>
                    <div className='myModal' id='loginModal'>
                        <div className='myModal-dialog'>
                            <div className='myModal-content'>
                                <div className='myModal-header'>
                                    <h4><span className='glyphicon glyphicon-lock'></span>Login</h4>
                                </div>
                                <div className='myModal-body'>
                                    {this.failedValidationMessage()}
                                    <div>
                                        <div className='form-group'>
                                            <label htmlFor='username'><span className='glyphicon glyphicon-user'></span>&nbsp; USERNAME</label>
                                            <input type='text' className='form-control' id='username' placeholder='Enter email' 
                                                value={this.state.username} onChange={this.onUserNameChange.bind(this)}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor='password'><span className='glyphicon glyphicon-eye-open'></span>&nbsp; PASSWORD</label>
                                            <input value={this.state.password} onChange={this.onPasswordChange.bind(this)}
                                                    type='text' className='form-control' id='password' 
                                                    placeholder='Enter password' />
                                        </div>                                        
                                        <button className='btn btn-default btn-primary btn-block' onClick={this.onLoginPressed.bind(this)}>
                                            <span className='glyphicon glyphicon-off'></span> Login
                                        </button>
                                    </div>
                                </div>
                                <div className='myModal-footer'>
                                    <Link to='/'>
                                        <button type='submit' className='btn btn-danger pull-left'>
                                            <span className='glyphicon glyphicon-remove'></span> Cancel
                                        </button>
                                    </Link>
                                    <p className='text-right'> Not a member? <a href=''>Sign Up</a></p>
                                    <p className='text-right'>Forgot <a href=''>Password?</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                </div>
                </div>   
            </section>
        );
    }
}

export default withRouter(Login);