import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div id='footer' className="navbar navbar-default navbar-fixed-bottom">
                <footer className="container-fluid text-center">
                    <a href="#myPage" title="To Top">
                                <span className="glyphicon glyphicon-chevron-up"></span>
                            </a>
                    <p>Theme made by Onivoj Enterprises</p>
                </footer>
            </div>            
        );
    }
}

export default Footer;