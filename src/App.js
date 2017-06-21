import React, { Component } from 'react';
import { } from 'react-bootstrap';

import Header from './common/components/Header/components/Header';
import SidebarMenu from './common/components/SidebarMenu/components/SidebarMenu';
import Welcome from './common/components/Welcome/components/Welcome';
import TutorialsCard from './common/components/TutorialsCard/components/TutorialsCard';
import TipsCard from './common/components/TipsCard/components/TipsCard';
import HelpCard from './common/components/HelpCard/components/HelpCard';
import SingleBlogPost from './common/components/SingleBlogPost/components/SingleBlogPost';

import AdSpace from './common/components/AdSpace/components/AdSpace';

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

                <AdSpace displayAdSpace />

                <div className="row">
                  <div className="col-md-12">
                    <ul className="nav nav-pills pills-toggle right-nav hide">
                      <li role="presentation" className="active">
                        <a href="./#/"><span className="glyphicon glyphicon-th-large"></span></a>
                      </li>
                      <li role="presentation">
                        <a href="./#/"><span className="glyphicon glyphicon-th-list"></span></a>
                      </li>
                      <li role="presentation">
                        <a href="./#/">Advanced</a>
                      </li>
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
                    <TutorialsCard />
                  </div>
                  <div className="col-md-8">
                    <TipsCard />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <HelpCard />
                  </div>
                  <div className="col-md-6">
                    <SingleBlogPost />
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
