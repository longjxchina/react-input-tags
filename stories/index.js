import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import InputTags from '../src/index.js';
import { Example } from './example.jsx';
import './example.css';

storiesOf('InputTags', module)
  .add('create token manually', () => (
    <div className='container'>
      <InputTags
        tags={[]}
        handleInsert={action('handleInsert')}
        handleRemove={action('handleRemove')}
      />
    </div>
  ));

storiesOf('ExampleTags', module)
  .add('blank', () => (
    <Example
      handleInsert={action('handleInsert')}
      handleRemove={action('handleRemove')}
      handleInputChange={action('handleInputChange')}
    />
  ))
  .add('with onFocus and onBlur', () => (
    <Example
      handleInsert={action('handleInsert')}
      handleRemove={action('handleRemove')}
      handleInputChange={action('handleInputChange')}
      onFocus={() => {
        console.log('onFocus');
      }}
      onBlur={() => {
        console.log('onBlur');
      }}
    />
  ));
