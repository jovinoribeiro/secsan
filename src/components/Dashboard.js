import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LoggedInNavBar from './LoggedInNavBar';
import UserStore from '../stores/UserStore';

import * as UserActions from '../actions/UserActions';
import * as GroupActions from '../actions/GroupActions';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        let user = null;
        if (this.props.location.state != undefined &&
            this.props.location.state.user != undefined) {
            user = this.props.location.state.user;
        } else {
            user = UserStore.getCurrentUser();
        }
        this.state = {
            user : user,
            userGroups : []
        }
    }

    componentWillMount() {
        UserActions.loadGroupsByUserId(this.state.user.id);
    }

    componentDidMount() {
        UserStore.on("user_groups_loaded", () => {
            this.setState( {
                userGroups : UserStore.getUserGroups()
            })
        });
    }

    render() {
        return (
            <section>
                <LoggedInNavBar />
                <div className="container">
                    <p className='pull-right'>
                        <strong>{this.state.user.firstName} {this.state.user.lastName}</strong>
                    </p>
                    <h1>Dashboard</h1>
                    <h2>Your Current Groups</h2>
                    <div className='row'>
                        {
                            this.state.userGroups.map( (item) =>
                                <div className='col-sm-4' key={item.id}>
                                <div className='panel panel-danger'>
                                    <div className='panel-heading'>
                                    <strong>{item.title}</strong>
                                    </div>
                                    <div className='panel-body'>
                                    <p><strong>Gift Giving Day: </strong>{ (new Date(item.giftGivingDate)).toLocaleDateString() }</p>
                                    <p><strong>Number of Participants: </strong>{item.members.length}</p>
                                    </div>
                                    <div className='panel-footer'>
                                    <strong><Link to={`/groupDetail/${item.id}`}>More Details...</Link></strong>
                                    </div>
                                </div>
                                </div>
                            )
                        }
                    </div>
                    <Link to='/creategroup'><button className='btn btn-success'>ADD GROUP</button></Link>
                    <Link to='/searchgroups'><button className='btn btn-info'>SEARCH GROUPS</button></Link>
                </div>
            </section>
        );
    }
}

export default Dashboard;