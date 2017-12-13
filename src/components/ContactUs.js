import React, { Component } from 'react';

class ContactUs extends Component {
    render() {
        return (
        <div id="contact" className="container">
            <h2 className="text-center">Contact</h2>
            <div className="row slideanimREMOVELATER ">
              <div className="col-sm-5">
                <p>Give us a shout.</p>
                <p><span className="glyphicon glyphicon-map-marker"></span> San Jose, CA</p>
                <p><span className="glyphicon glyphicon-phone"></span> +1 408-999-9999</p>
                <p><span className="glyphicon glyphicon-envelope"></span> help@secretsanta.com</p>
              </div>
              <div className="col-sm-7">
                <div className="row">
                  <div className="col-sm-6 form-group">
                    <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
                  </div>
                  <div className="col-sm-6 form-group">
                    <input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
                  </div>
                </div>
                <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
                <br/>
                <div className="row">
                  <div className="col-sm-12 form-group">
                    <button className="btn btn-default pull-right" type="submit">Send</button>
                  </div>
                </div>
              </div>
            </div>            
        </div>
        );
    }
}

export default ContactUs;