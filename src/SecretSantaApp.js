import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Welcome from './components/Welcome';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Welcome} />
            </Switch>
        )
    }
}


class SecretSantaApp extends Component {
    render() {
        return (
            <div>
                <Routes />
            </div>
        );
    }
}

export default SecretSantaApp;