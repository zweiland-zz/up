import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import './styles/css/index.css';

import App from './App';
import AccountPage from './scenes/Account/AccountPage';
import SitesPage from './scenes/Sites/SitesPage';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/account" component={AccountPage}/>
      <Route exact path="/sites" component={SitesPage}/>
    </div>
  </Router>
), document.getElementById('root'))
registerServiceWorker();
