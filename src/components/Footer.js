import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="container-fluid text-center">
            <a href="#myPage" title="To Top">
                <span className="glyphicon glyphicon-chevron-up"></span>
            </a>
            <p>Theme made by Onivoj Enterprises</p>
            </footer>
        );
    }
}

export default Footer;