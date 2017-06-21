import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';



storiesOf('Buttons', module)
  .add('Color Scheme', () => (
    <div>
      <button type="button">Hello</button>
    </div>
  ));
