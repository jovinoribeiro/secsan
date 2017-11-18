import React, { Component } from 'react';

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron text-center">
                <h1>SECRET SANTA</h1>
                <p>We make gift giving easy</p>
                <a href="#contact" className="btn btn-primary">JOIN THE FUN</a>
            </div>
        );
    }
}

export default Jumbotron;