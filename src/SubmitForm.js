import React, { Component } from 'react';
import './App.css';
import {Button, Row, Input, Modal} from 'react-materialize'
import firebase from './Firebase.js';

// QUESTIONS FOR KATIE
    //I would love to adjust the close button from the bottom right and change it to an 'x' icon in the top right corner. How do I go about doing this? (not a dealbreaker if it's too complex)
    // I also need to add in a confirmed message, and I would like it to live in the modal. How do I go about doing this?

// QUESTIONS FOR JAMES/KATIE
    // Honestly though... why isn't this form connected to Firebase?


class SubmitForm extends Component {
  constructor() {
    console.log('constructor() Called');
    super();
    this.state = {
      stores: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    this.preventDefault();
    const storesReference = firebase.database().ref('stores');
    const store = {
      name: this.state.name,
			image: this.state.image,
			priceRange: this.state.priceRange,
			address1: this.state.address1,
			address2: this.state.address2,
			city: this.state.city,
			state: this.state.state,
			zipCode: this.state.zipCode,
			url: this.state.url
    }
  }
  render() {
    return (
      <Modal
        header='Submit your favorite thrift store'
        trigger={<Button className='material-icons'>launch</Button>}>
        <Row onSubmit={this.handleSubmit}>
          <Input s={12} label="Image Path" type='url' onChange={this.handleChange} value={this.state.image} />
          <Input s={12} label="Store Name" type='text' onChange={this.handleChange} value={this.state.name} />
          <Input s={12} type='select' label="Price Range" onChange={this.handleChange} value={this.state.priceRange} >
            <option value='1'>$</option>
            <option value='2'>$$</option>
            <option value='3'>$$$</option>
            <option value='4'>$$$$</option>
          </Input>
          <Input s={6} label="Address" onChange={this.handleChange} value={this.state.address1} />
          <Input s={6} label="Address 2" onChange={this.handleChange} value={this.state.address2} />
          <Input s={4} label="City" onChange={this.handleChange} value={this.state.city} />
          <Input s={4} label="State" onChange={this.handleChange} value={this.state.state} />
          <Input s={4} label="Zip Code" onChange={this.handleChange} value={this.state.zipCode} />
        </Row>
        <Row>
          <Input s={12} label="Website URL" type='url' onChange={this.handleChange} value={this.state.url} />
        </Row>
        <Button>Submit</Button>
      </Modal>
    )
  }

}


export default SubmitForm;
