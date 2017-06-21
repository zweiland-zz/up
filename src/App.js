import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div className="bluehost" id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbar-brand home-link hide">
              <a href="./#/">
                <span className="glyphicon glyphicon-home home-link" />
              </a>
            </div>
            <div className="navbar-brand">
              <a id="menu-toggle" className="logo" href="./#/">
                <img src="img/bluehost-logo.png" alt="Bluehost" height="34" />
              </a>
            </div>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav right-nav">
              <li>
                <a href="./#/">
                  <i className="glyphicon glyphicon-search" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="./#/">
                  <i className="glyphicon glyphicon-bell" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="./#/">
                  <i className="glyphicon glyphicon-shopping-cart" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="./#/">
                  <i className="glyphicon glyphicon-user" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="sidebar-wrapper">
        <nav id="spy">
          <ul className="nav nav-pills nav-stacked primary-nav">
            <li>
                <a href="#home" className="active"><span className="glyphicon glyphicon-home" aria-hidden="true"></span> <span className="fa fa-home solo">Home</span></a>
            </li>
            <li>
              <a href="#anch1">
                <span className="glyphicon wordpress-logo">
                  <img src="img/wordpress-logo.png" alt="WP" />
                </span>
                <span className="fa fa-anchor solo">WordPress</span>
              </a>
            </li>
            <li>
              <a href="#anch2">
                <i className="glyphicon glyphicon-tag" aria-hidden="true" />
                <span className="fa fa-anchor solo">Marketplace</span>
              </a>
            </li>
            <li>
              <a href="#anch3">
                <i className="glyphicon glyphicon-envelope" aria-hidden="true" />
                <span className="fa fa-anchor solo">Email</span>
              </a>
            </li>
            <li>
              <a href="#anch4">
                <i className="glyphicon glyphicon-globe" aria-hidden="true" />
                <span className="fa fa-anchor solo">Domains</span>
              </a>
            </li>
            <li>
              <a href="#anch4">
                <i className="glyphicon glyphicon-screenshot" aria-hidden="true" />
                <span className="fa fa-anchor solo">Advanced</span>
              </a>
            </li>
            <li>
              <a href="#anch4">
                <i className="glyphicon glyphicon-record" aria-hidden="true" />
                <span className="fa fa-anchor solo">Help</span>
              </a>
            </li>
            <li>
              <a href="#anch4">
                <i className="glyphicon glyphicon-comment" aria-hidden="true" />
                <span className="fa fa-anchor solo">Live Chat</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="page-content-wrapper">
          <div className="page-content">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-12">
                        <ul className="nav nav-pills pills-toggle right-nav hide">
                          <li role="presentation" className="active"><a href="./#/"><span className="glyphicon glyphicon-th-large"></span></a></li>
                          <li role="presentation"><a href="./#/"><span className="glyphicon glyphicon-th-list"></span></a></li>
                          <li role="presentation"><a href="./#/">Advanced</a></li>
                        </ul>
                        <h1 className="title">Welcome to Bluehost!</h1>
                        <ul className="nav nav-tabs content-tabs hide">
                          <li><h1 className="page-title">Dashboard</h1></li>
                          <li role="presentation" className="active"><a href="./#/">For You</a></li>
                          <li role="presentation"><a href="./#/">All Applications</a></li>
                        </ul>
                      </div>
                      <div className="col-md-8">
                        <div className="panel panel-default primary-cta content-well">
                          <div className="panel-body">
                            <h2>Bluehost &amp; WordPress</h2>
                            <p>Bluehost has been recommended by WordPress for over ten years. To take the first step in creating your website, click the button below.</p>
                            <button type="button" className="btn btn-primary">Get Started on WordPress</button>
                            <a href="">Learn More</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                          <div className="panel panel-default sub-cta">
                            <div className="panel-body">
                              <h4><a href=""><span className="glyphicon glyphicon-globe" aria-hidden="true"></span> Add a New Domain</a></h4>
                            </div>
                          </div>
                          <div className="panel panel-default sub-cta">
                            <div className="panel-body">
                              <h4><a href=""><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span> Set Up Your Email</a></h4>
                            </div>
                          </div>
                          <div className="panel panel-default sub-cta">
                            <div className="panel-body">
                              <h4><a href=""><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Create a New Site</a></h4>
                            </div>
                          </div>
                      </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="panel panel-default align-center content-well">
                            <div className="panel-body">
                              <h4>Video Tutorials</h4>
                              <div className="well well-lg video-well"></div>
                              <button type="button" className="btn btn-default">View Library</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="panel panel-default tips-panel content-well">
                            <div className="panel-body">
                              <h4>Tips and Insights</h4>
                              <ul>
                                <li>
                                  <p><strong>Where to Begin</strong><br />
                                  If you're serious about your site, consider <a href="">choosing WordPress.</a>
                                  WordPress powers 27% of websites worldwide!</p>
                                </li>
                                <li>
                                  <p><strong>You've Got This!</strong><br />
                                    Around 75% of websites today are not active, but parked domains or similar. If you need help getting your site up and running at any point, <a href="">just ask!</a></p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="panel panel-default content-well help-center">
                            <div className="panel-body">
                              <h4>Need Some Guidance?</h4>
                              <p>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search the help center..."
                                  aria-describedby="basic-addon1"
                                />
                              </p>
                              <p>
                                <button type="button" className="btn btn-primary">Search Help</button>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="panel panel-default content-well">
                            <div className="panel-body">
                              <h4>From the BlueHost Blog</h4>
                              <div className="col-md-3">
                                <img src="img/blog-thumb.png" alt="Blog Thumb" />
                              </div>
                              <div className="col-md-9">
                                <p><strong>8 Outstanding Ways to Promote Your Website</strong></p>
                                <p>There are many metrics you can use to measure the success of your website, from bounce rate to traffic...</p>
                                <p><a href="">Read More</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
              <ul className="demo-nav">
                <li><a href="dash2.htm">Framework</a></li>
                <li><a href="ipage.htm">iPage</a></li>
                <li><a href="bluehost.htm">BlueHost</a></li>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
