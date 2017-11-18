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
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem</p>
                        </div>
                        <div className="col-sm-4">
                            <span className="logo-small glyphicon glyphicon-tree-deciduous"></span>
                            <h4>Interact</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem</p>
                        </div>
                        <div className="col-sm-4">
                            <span className="logo-small glyphicon glyphicon-lock"></span>
                            <h4>Shop</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Features;