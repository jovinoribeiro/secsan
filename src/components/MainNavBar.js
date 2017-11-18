import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class MainNavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#about">ABOUT</a></li>
                            <li><a href="#features">FEATURES</a></li>
                            <li><a href="#contact">CONTACT</a></li>
                            <li><Link to='/login'>LOGIN</Link></li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default MainNavBar;