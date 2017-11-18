import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import SecretSantaActions from '../actions/SecretSantaActions';
import MainNavBar from './MainNavBar';
import Jumbotron from './Jumbotron';
import About from './About';
import Features from './Features';
import ContactUs from './ContactUs';

class Welcome extends Component {
    render() {
        return (
            <section>
                <MainNavBar />
                <Jumbotron />
                <About />
                <Features />
                <ContactUs />
            </section>
        )
    }
}

export default Welcome;