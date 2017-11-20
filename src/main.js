import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import SecretSantaApp from './SecretSantaApp';

require('../src/styles/main.css');

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    (
      <BrowserRouter>
        <SecretSantaApp />
      </BrowserRouter>      
    ),
    document.getElementById('mount')
  );
});
