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

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    let staleState = this.state;
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    console.log('woo', e)
    e.preventDefault();
    const storesReference = firebase.database().ref('stores');
    const store = {
      name: this.state.name || '',
			image: this.state.image || '',
			priceRange: this.state.priceRange || '',
			address1: this.state.address1 || '',
			address2: this.state.address2 || '',
			city: this.state.city || '',
			state: this.state.state || '',
			zipCode: this.state.zipCode || '',
			url: this.state.url || ''
    }
    console.log(store);
    storesReference.push(store);
    // confirmation goes here
    // alert('you did it!');
    // close modal
  }
  render() {
    return (
      <Modal
        header='Submit your favorite thrift store'
        trigger={<Button className='material-icons'>launch</Button>}>
        <Row >
          <Input s={12} name='image' label="Image Path" type='url' onBlur={this.handleChange} value={this.state.image} />
          <Input s={12} name='name' label="Store Name" type='text' onBlur={this.handleChange} value={this.state.name} />
          <Input s={12} name='priceRange' type='select' label="Price Range" onChange={this.handleChange} value={this.state.priceRange} >
            <option value='$'>$</option>
            <option value='$$'>$$</option>
            <option value='$$$'>$$$</option>
            <option value='$$$$'>$$$$</option>
          </Input>
          <Input name='address1' s={6} label="Address" onBlur={this.handleChange} value={this.state.address1} />
          <Input name='adresss2' s={6} label="Address 2" onBlur={this.handleChange} value={this.state.address2} />
          <Input name='city' s={4} label="City" onBlur={this.handleChange} value={this.state.city} />
          <Input name='state' s={4} label="State" onBlur={this.handleChange} value={this.state.state} />
          <Input name='zipCode' s={4} label="Zip Code" onBlur={this.handleChange} value={this.state.zipCode} />
        </Row>
        <Row>
          <Input s={12} label="Website URL" type='url' onBlur={this.handleChange} value={this.state.url} />
        </Row>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Modal>
    )
  }

}


export default SubmitForm;
