import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from "../../common/Button/Button";
import TextBlock from "../../common/TextBlock/TextBlock";

export default class Welcome extends React.Component {
  render() {
    return (
      <div className="col-md-8">
        <div className="panel panel-default primary-cta content-well">
          <div className="panel-body">
            <h2>Bluehost &amp; WordPress</h2>
            <TextBlock
              text="Bluehost has been recommended by WordPress for over ten years.
              To take the first step in creating your website, click the button below."
            />
            <Button className="btn btn-primary" text="Get Started on WordPress" />
            <NavLink to="/">Learn More</NavLink>
          </div>
        </div>
      </div>
    );
  };
};
