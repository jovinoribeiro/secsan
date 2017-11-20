import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LoggedInNavBar from './LoggedInNavBar';
import * as GroupActions from '../actions/GroupActions';
import GroupStore from '../stores/GroupStore';

class SearchGroups extends Component {
    constructor(props) {
        super(props);
        this.state = {
            availGroups : []
        }
    }

    componentWillMount() {
        GroupActions.loadAVailGroupsToEnroll( "1" );
    }

    componentDidMount() {
        console.log('SeachGroupDidMount');
        GroupStore.on("available_groups_loaded", () => {
            this.setState( {
                availGroups : GroupStore.getAvailableGroups()
            });
        })
    }

    render() {
        return (
            <section>
                <LoggedInNavBar />
                <div className="input-group" id='searchbox'>
                    <input type="text" className="form-control" placeholder="Search" name="search"/>
                    <div className="input-group-btn">
                    <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                    </div>
                </div>  
                <br />
                <div className='container'>
                    <h2>SOME AVAILABLE GROUPS</h2>
                    <div className='row'>
                        {
                        this.state.availGroups.map( (item, index) => 
                            <div className='col-sm-4' key={index}>
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
                </div>
            </section>
        );
    }
}

export default SearchGroups;