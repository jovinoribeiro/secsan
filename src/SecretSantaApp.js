import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Welcome from './components/Welcome';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CreateGroup from './components/CreateGroup';
import SearchGroups from './components/SearchGroups';
import GroupDetails from './components/GroupDetails';

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
                <Route path='/groupDetails/:groupId' component={GroupDetails} />
                <Route path='/logout' component={Welcome} />
            </Switch>
        )
    }
}

class SecretSantaApp extends Component {
    render() {
        return (
            <div>
                <Routes />
                <br /><br /><br /><br /><br />
                <Footer />
            </div>
        );
    }
}

export default SecretSantaApp;