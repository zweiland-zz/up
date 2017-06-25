import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import defaultTheme from './styles/base.css';

const ThemeTestPage = ({theme}) => {
    return (
      <div className="app align-center">
        <h1>Testing Themes Page</h1>
      </div>
    )
};

export const ThemeTest = themr('ThemeTest', defaultTheme)(ThemeTestPage);
