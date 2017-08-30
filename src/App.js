import React, { Component } from 'react';
import './App.css';
import Gallery from './Gallery.js';
import SubmitForm from './SubmitForm.js';
import {Row} from 'react-materialize'

class App extends Component {
  render() {
    console.log('render() called');
    return (
      <div>
        <Row>
          <Gallery />
        </Row>
        <div className='submit-form'>
          <SubmitForm />
        </div>
      </div>
    )
  }
}

export default App;
