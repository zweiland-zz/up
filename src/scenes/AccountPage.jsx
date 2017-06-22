import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import Header from '../components/Header/components/Header';
import SidebarMenu from '../components/SidebarMenu/components/SidebarMenu';
import Title from '../components/common/Title/components/Title';

class AccountPage extends Component {
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
                    <Title
                      dashTitle="Account Page"
                    />
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

export default AccountPage;
