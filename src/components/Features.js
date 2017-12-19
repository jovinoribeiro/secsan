import React, { Component } from 'react';

class Features extends Component {
    render() {
        return (
            <div id="features" className="container-fluid text-center bg-grey">
                <div className='container'>
                    <h2>Features</h2><br />
                    <div className="row">
                        <div className="col-sm-4">
                            <span className="logo-small glyphicon glyphicon-folder-open"></span>
                            <h4>Organize Groups</h4>
                            <p>
                                You can create and/or join as many groups as you want.
                                Group admin approves or rejects new members.
                                Set Event date and location
                                Set the price of gits
                            </p>
                        </div>
                        <div className="col-sm-4">
                            <span className="logo-small glyphicon glyphicon-tree-deciduous"></span>
                            <h4>Interact</h4>
                            <p>Participants can send each other's private messages. 
                                You can also send public messages in a group message board.  </p>
                        </div>
                        <div className="col-sm-4">
                            <span className="logo-small glyphicon glyphicon-lock"></span>
                            <h4>Shop</h4>
                            <p>Not sure what to buy? Let us suggest you a few gifts that are popular 
                                with Secret Santa Partipants.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Features;