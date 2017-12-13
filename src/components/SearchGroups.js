import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LoggedInNavBar from './LoggedInNavBar';
import * as GroupActions from '../actions/GroupActions';
import GroupStore from '../stores/GroupStore';
import UserStore from '../stores/UserStore';

class SearchGroups extends Component {
    constructor(props) {
        super(props);
        this.state = {
            availGroups : [],
            searchField : '',
            curUserId : "1"
        }
    }

    componentWillMount() {
        //GroupActions.loadAVailGroupsToEnroll( "1" );
        
    }

    componentDidMount() {
        console.log('SeachGroupDidMount');
        GroupStore.on("available_groups_loaded", () => {
            this.setState( {
                availGroups : GroupStore.getAvailableGroups()
            });
        })

        GroupStore.on("group_joined", () => {
            let curUser = UserStore.getCurrentUser();
            this.props.history.push( {
                pathname : '/dashboard',
                state : {
                    user : curUser
                }
            })
        })
    }

    onSearchValueChange(event) {
        this.setState( {
            searchField : event.target.value
        })
        console.log(this.state.searchField);
    }

    onSubmit() {
        GroupActions.searchGroup(this.state.searchField);
    }

    join(groupId) {
       GroupActions.joinGroup(groupId, this.state.curUserId);
    }

    resultsHeader() {
        if (this.state.availGroups.length > 0) {
            return (
                <h2>Here is the group we found</h2>
            )
        }
    }

    render() {
        return (
            <section>
                <LoggedInNavBar />
                <div className='container'>
                    <h1>Group Search</h1>
                    <h4>Search for an existing group for you to join.</h4>
                    <div className="input-group" id='searchbox'>
                        <input type="text" className="form-control" 
                            placeholder="Enter the complete name of the group you are searching..." 
                            name="search"
                            onChange={this.onSearchValueChange.bind(this)}
                        />
                        <div className="input-group-btn">
                        <button className="btn btn-default btn-md" type="submit"
                            onClick={this.onSubmit.bind(this)}
                        ><i className="glyphicon glyphicon-search"></i></button>
                        </div>
                    </div>  
                    <br />
                    <div className='btn-group'>
                        <Link to='/dashboard'><button type='button' className='btn btn-info'>Cancel</button></Link>&nbsp;
                    </div>
                    <button className='btn btn-success' onClick={this.onSubmit.bind(this)}>Search</button>
                </div>
                <br />
                <div className='container'>
                    {this.resultsHeader()}
                    <div className='row'>
                        {
                            this.state.availGroups.map( (item) =>
                                <div className='col-sm-4' key={item.id}>
                                    <div className='panel panel-danger'>
                                        <div className='panel-heading'>
                                            <img src={'default_group3.jpg'} alt="default group" width='100%'/>
                                        </div>
                                        <div className='panel-body'>
                                            <p><strong>{item.title}</strong></p>
                                            <p><strong>Gift Giving Day: </strong>
                                            <p><strong>Participants: </strong>{item.members.length}</p>
                                                { (new Date(item.giftGivingDate)).toLocaleDateString() }
                                            </p>                                                 
                                        </div>
                                        <div className='panel-footer text-right'>
                                            <Link to={`/groupDetail/${item.id}`}>
                                                <button className='btn btn-danger'>Details</button>&nbsp;
                                            </Link>
                                            <button className='btn btn-success pull-right' onClick={this.join.bind(this, item.id)}>Join</button>
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

// https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method
// class JoinGroup extends Component {
//     join = () => {
//         this.props.onJoinClick(this.props.value);
//     }

//     rener() {
//         return (
//              <button className='btn btn-success pull-right' onClick={this.join}>Join</button>
//         );
//     }
// }



export default SearchGroups;