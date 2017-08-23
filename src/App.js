import React, { Component } from 'react';
import './App.css';
import Gallery from './Gallery.js';
import SubmitForm from './SubmitForm.js';
import {Row, Col} from 'react-materialize'

class App extends Component {
  render() {
    console.log('render() called');
    return (
      <div>
        <Row>
          <Gallery />
        </Row>
        <SubmitForm />
      </div>
    )
  }
}

export default App;
