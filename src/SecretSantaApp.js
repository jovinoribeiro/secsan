import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Welcome from './components/Welcome';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CreateGroup from './components/CreateGroup';
import SearchGroups from './components/SearchGroups'

import Footer from './components/Footer';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Welcome} />
                <Route path='/login' component={Login} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/creategroup' component={CreateGroup} />
                <Route path='/searchgroups' component={SearchGroups} />
            </Switch>
        )
    }
}

class SecretSantaApp extends Component {
    render() {
        return (
            <div>
                <Routes />
                <Footer />
            </div>
        );
    }
}

export default SecretSantaApp;