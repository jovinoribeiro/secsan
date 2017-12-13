import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LoggedInNavBar from './LoggedInNavBar';
import UserStore from '../stores/UserStore';

import * as UserActions from '../actions/UserActions';
import * as GroupActions from '../actions/GroupActions';

//import defaul_group_image from '../img/start-a-secret-santa.gif';

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
       //put this back UserActions.loadGroupsByUserId(this.state.user.id);
        UserActions.loadGroupsByUserId("1");
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
                    <h4>Your Current Groups. Create a new Group. Search for Groups.</h4>
                    <div className='btn-group'>
                        <Link to='/creategroup'><button type='button' className='btn btn-success'>CREATE A GROUP</button></Link>&nbsp;
                        <Link to='/searchgroups'><button type='button' className='btn btn-success'>SEARCH A GROUP</button></Link>
                    </div>
                    <h3>My Active Groups</h3>
                    <div className='row'>
                        {
                            this.state.userGroups.map( (item) =>
                                <div className='col-sm-4' key={item.id}>
                                    <div className='panel panel-danger'>
                                        <div className='panel-heading'>
                                            <img src={'default_group3.jpg'} alt="default group" width='100%'/>
                                        </div>
                                        <div className='panel-body'>
                                            <p><strong>{item.title}</strong></p>
                                            <p><strong>Gift Giving Day: { (new Date(item.giftGivingDate)).toLocaleDateString() }</strong>
                                            <p><strong>Participants: </strong>{item.members.length}</p>
                                            </p>                                                 
                                        </div>
                                        <div className='panel-footer text-right'>
                                            <Link to={`/groupDetails/${item.id}`}>
                                                <button className='btn btn-danger'>Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Dashboard;