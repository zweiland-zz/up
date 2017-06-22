import React, { Component } from 'react';
import { } from 'react-router-dom'

import Header from '../../components/Header/components/Header';
import SidebarMenu from '../../components/SidebarMenu/components/SidebarMenu';

class AdvancedPage extends Component {
  render() {
    return (
      <div className="app">
        <div id="wrapper">
          <Header />
          <SidebarMenu />
          <div id="page-content-wrapper">
            <div className="page-content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <h1>Advanced</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdvancedPage;
