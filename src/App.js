import React, { Component } from 'react';
import { } from 'react-bootstrap';

import Header from './common/components/Header/components/Header';
import SidebarMenu from './common/components/SidebarMenu/components/SidebarMenu';
import Welcome from './common/components/Welcome/components/Welcome';
import HelpCard from './common/components/HelpCard/components/HelpCard';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="bluehost" id="wrapper">
        <Header />
        <SidebarMenu />
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
                  <Welcome />
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
                    <HelpCard />
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
