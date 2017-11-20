import React, { Component } from 'react';
import LoggedInNavBar from './LoggedInNavBar';

class CreateGroup extends Component {
    render() {
        return (
            <section>
                <LoggedInNavBar />
                <div className="container">
                    <h1>Create Groups</h1>
                </div>
            </section>
        );
    }
}

export default CreateGroup;