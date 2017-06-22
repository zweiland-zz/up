import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import './styles/css/index.css';

import App from './App';
import AccountPage from './scenes/AccountPage';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/account" component={AccountPage}/>
    </div>
  </Router>
), document.getElementById('root'))
registerServiceWorker();
