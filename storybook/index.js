import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Alert, Button, ButtonGroup, Grid, Row, Col, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

import '../src/common/assets/styles/main.scss';

const block104 = {
  width: '104px',
  height: '104px',
};

storiesOf('Buttons', module)
  .add('Color Scheme', () => (
    <div>
      <button type="button">Hello</button>
    </div>
  ));
