import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LoggedInNavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to=''><span className="navbar-brand"><strong>SECRET SANTA</strong></span></Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to='/dashboard'>DASHBOARD</Link></li>
                            <li><Link to='/logout'>LOGOUT</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default LoggedInNavBar;