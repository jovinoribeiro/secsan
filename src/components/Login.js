import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import MainNavBar from './MainNavBar';
import Jumbotron from './Jumbotron';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username : '',
            password : ''
        }
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
        console.log( this.props.history );
        this.props.history.push( { pathname : '/dashboard' } );
    }

    render() {
        return (
            <section>
                <MainNavBar />
                <Jumbotron />
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
                                    <div>
                                        <div className='form-group'>
                                            <label htmlFor='username'><span className='glyphicon glyphicon-user'></span></label>
                                            <input type='text' className='form-control' id='username' placeholder='Enter email' 
                                                value={this.state.username} onChange={this.onUserNameChange.bind(this)}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor='password'><span className='glyphicon glyphicon-eye-open'></span></label>
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