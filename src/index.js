import React from 'react';
import ReactDOM from 'react-dom';

import Logo from "./components/component";


ReactDOM.render((
  <div>
    <Logo />
  </div>
), document.getElementById('root'));


{/* import inlineCss from './page.css'; */}
{/*


  <ThemeProvider theme={contextTheme}>
      <Item />
  </ThemeProvider>

  <Item theme={inlineCss}/>







import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {ThemeProvider} from 'react-css-themr';
import ThemeTest from './scenes/tests/ThemeTestPage';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/css/index.css';


const contextTheme = {
    ThemeTestPage: require('./themes/bluehost.scss'),
};

ReactDOM.render((
<ThemeProvider theme={contextTheme}>
  <ThemeTest />
</ThemeProvider>
), document.getElementById('root'))



import App from './App';
import AccountPage from './scenes/account/AccountPage';
import SitesPage from './scenes/sites/SitesPage';
import MarketplacePage from './scenes/marketplace/MarketplacePage';
import EmailPage from './scenes/email/EmailPage';
import DomainsPage from './scenes/domains/DomainsPage';
import AdvancedPage from './scenes/advanced/AdvancedPage';
*/}

{/*
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/account" component={AccountPage}/>
      <Route exact path="/sites" component={SitesPage}/>
      <Route exact path="/marketplace" component={MarketplacePage}/>
      <Route exact path="/email" component={EmailPage}/>
      <Route exact path="/domains" component={DomainsPage}/>
      <Route exact path="/advanced" component={AdvancedPage}/>

      <Route exact path="/tests/theme" component={ThemeTestPage}/>

    </div>
  </Router>*/}
