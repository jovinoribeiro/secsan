import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <h1>Dashboard</h1>
                    <Link to='/creategroup'><button className='btn btn-success'>ADD GROUP</button></Link>
                    <Link to='/searchgroups'><button className='btn btn-info'>SEARCH GROUPS</button></Link>
                </div>
            </section>
        );
    }
}

export default Dashboard;