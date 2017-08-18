import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from './Firebase.js';
import './App.css';
import {Modal} from 'react-materialize'
import {Card, CardTitle, Input, Button, Row} from 'react-materialize'
import Gallery from './Gallery.js';
import SubmitForm from './SubmitForm.js';

class App extends Component {
  render() {
    console.log('render() called');
    return (
      <div>
        <Gallery />
        <SubmitForm />
      </div>
    )
  }
}

export default App;
