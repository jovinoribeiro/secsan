import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
          <div id="about" className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h2>What is Secret Santa?</h2>
                    <p>
                        Secret Santa is an affordable and fun way for a group of people to exchange holiday presents. 
                        Put the names of the participants into a virtual hat and ask everyone to draw one name. 
                        Whichever name you receive is the person you will purchase a gift for. 
                        Keep the name a secret until the party!
                    </p>
                </div>
            </div>        
          </div>
        );
    }
}

export default About;