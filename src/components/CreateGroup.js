import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LoggedInNavBar from './LoggedInNavBar';
import UserStore from '../stores/UserStore';

import * as GroupActions from '../actions/GroupActions';

class CreateGroup extends Component {
    constructor() {
        super();
        this.state = {
            title : '',
            giftGivingDate : '',
            local : ''
        }
    }

    onTitleChange(event) {
        this.setState( { title : event.target.value });
    }

    onDateChange(event) {
        this.setState( { giftGivingDate : event.target.value });
    }

    onLocalChange(event) {
        this.setState( { local : event.target.value });
    }

    add() {
        console.log(this.state.title);
        console.log(this.state.giftGivingDate);
        var event = {};
        event.title = this.state.title;
        event.giftGivingDate = this.state.giftGivingDate;
        event.adminId = UserStore.getCurrentUser().id;
        GroupActions.createGroup( event );
    }

    render() {
        return (
            <section>
                <LoggedInNavBar />
                <div className="container">
                    <h1>Create Groups</h1>
                    <h4>Create a new group for you to join and invite your friends.</h4>
                    <div>
                        <div className='form-group'>
                            <label htmlFor='title'>Group Name:</label>
                            <input type='text' className='form-control'
                                value={this.state.title}
                                onChange={this.onTitleChange.bind(this)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="date">Gift Giving Date:</label>
                            <input type='text' className='form-control'
                                value={this.state.giftGivingDate}
                                onChange={this.onDateChange.bind(this)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='place'>Location of Celebration</label>
                            <input type='text' className='form-control'
                                value={this.state.local}
                                onChange={this.onLocalChange.bind(this)} />
                        </div>
                        <div className='btn-group'>
                            <Link to='/dashboard'><button className='btn btn-info'>Cancel</button></Link>&nbsp;
                        </div>
                        <div className='btn-group'>
                            <button className='btn btn-success' onClick={this.add.bind(this)}>Create</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CreateGroup;