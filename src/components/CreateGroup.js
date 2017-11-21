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
            giftGivingDate : ''
        }
    }

    onTitleChange(event) {
        this.setState( { title : event.target.value });
    }

    onDateChange(event) {
        this.setState( { giftGivingDate : event.target.value });
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
                    <div>
                        <div className='form-group'>
                            <label htmlFor='title'>Title:</label>
                            <input type='text' className='form-control'
                                value={this.state.title}
                                onChange={this.onTitleChange.bind(this)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="date">Date:</label>
                            <input type='text' className='form-control'
                                value={this.state.giftGivingDate}
                                onChange={this.onDateChange.bind(this)} />
                        </div>
                        <Link to='/dashboard'><button className='btn btn-info'>Cancel</button></Link>
                        <button className='btn btn-success' onClick={this.add.bind(this)}>Add</button>
                    </div>
                </div>
            </section>
        );
    }
}

export default CreateGroup;