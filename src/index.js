import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/css/index.css';

import App from './App';
import AccountPage from './scenes/Account/AccountPage';
import SitesPage from './scenes/Sites/SitesPage';
import MarketplacePage from './scenes/Marketplace/MarketplacePage';
import EmailPage from './scenes/Email/EmailPage';
import DomainsPage from './scenes/Domains/DomainsPage';
import AdvancedPage from './scenes/Advanced/AdvancedPage';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/account" component={AccountPage}/>
      <Route exact path="/sites" component={SitesPage}/>
      <Route exact path="/marketplace" component={MarketplacePage}/>
      <Route exact path="/email" component={EmailPage}/>
      <Route exact path="/domains" component={DomainsPage}/>
      <Route exact path="/advanced" component={AdvancedPage}/>
    </div>
  </Router>
), document.getElementById('root'))
registerServiceWorker();
