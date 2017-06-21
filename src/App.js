import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import Header from './common/components/Header/components/Header';
import SidebarMenu from './common/components/SidebarMenu/components/SidebarMenu';
import Welcome from './common/components/Welcome/components/Welcome';
import TutorialsCard from './common/components/TutorialsCard/components/TutorialsCard';
import TipsCard from './common/components/TipsCard/components/TipsCard';
import HelpCard from './common/components/HelpCard/components/HelpCard';
import SingleBlogPost from './common/components/SingleBlogPost/components/SingleBlogPost';
import Filters from './common/components/Filters/components/Filters';
import Title from './common/components/Title/components/Title';

import AdSpace from './common/components/AdSpace/components/AdSpace';
import SiteCard from './common/components/SiteCard/components/SiteCard';

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
                    <Filters />
                    <Title />
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
