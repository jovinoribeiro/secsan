import React, { Component } from 'react';
import LoggedInNavBar from './LoggedInNavBar';
import * as GroupActions from '../actions/GroupActions';
import GroupStore from '../stores/GroupStore';

class GroupDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupDetail : { members : [] }
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
                    <div>
                        <h2>Members</h2>
                        <ul>
                        {
                            this.state.groupDetail.members.map(
                                (member, index) => 
                                <li key={index}>{member}</li>
                            )
                        }
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default GroupDetails;