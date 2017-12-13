import React, { Component } from 'react';
import LoggedInNavBar from './LoggedInNavBar';
import * as GroupActions from '../actions/GroupActions';
import GroupStore from '../stores/GroupStore';
import {Link} from 'react-router-dom';

class GroupDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupDetail : { memberDetails : [] }
        }
    }

    componentWillMount() {
        GroupActions.fetchGroupById( this.props.match.params.groupId );
    }

    componentDidMount() {
        GroupStore.on("group_loaded", () => {
            this.setState( {
                groupDetail : GroupStore.getGroupDetail()
            })
        });
    }

    render() {
        return (
            <section>
                <LoggedInNavBar />
                <div className='container'>
                    <h1>Group Details</h1>
                    <h3>{this.state.groupDetail.title}</h3>
                    <h2>Members</h2>
                    <div className='row'>
                        {
                            this.state.groupDetail.memberDetails.map(
                                (member, index) => 
                                <div className='col-sm-3 text-center'>
                                    <img src={'../user_avatar.png'} alt="user" />
                                    <div>{member.firstName} {member.lastName}</div>
                                </div>
                            )
                        }                        
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <Link to='/dashboard'><button type='button' className='btn btn-info'>Cancel</button></Link>&nbsp;
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default GroupDetails;