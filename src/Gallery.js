import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from './Firebase.js';
import './App.css';
import {Modal} from 'react-materialize'
import {Card, CardTitle} from 'react-materialize'


class Gallery extends Component {
  constructor() {
    console.log('constructor() Called');
    super();
    this.state = {
      stores: []
    }
  }
  componentDidMount() {
    console.log('componentDidMount() called');
    const storesReference = firebase.database().ref('stores');
    storesReference.on('value', (snapshot) => {
      let stores = snapshot.val();
      console.log('stores from Firebase: ', stores);
      let newState = [];
      for (let store in stores) {
        console.log(stores[store])
        newState.push({
          name: stores[store].name,
          image: stores[store].image,
          rating: stores[store].rating,
          priceRange: stores[store].priceRange,
          address1: stores[store].address1,
          address2: stores[store].address2,
          city: stores[store].city,
          state: stores[store].state,
          zipCode: stores[store].zipCode,
        })
      }
      this.setState({
        stores: newState
      })
    });
  }
  render() {
    console.log('render() called');
    let gallery = this.state.stores.map((store) => {
      console.log(store)
      return (
        <div key={store.name}>
        <Card header={<CardTitle reveal image={store.image} waves='light'/>}
        		title={store.name}
        		reveal={<p>{store.address1} {store.address2}<br />{store.city} {store.state} {store.zipCode}<br />{store.rating}<br />{store.priceRange}</p>}>
        </Card>
        </div>
      )
    });
    console.log('Current App State:', this.state);
    return (
      <div className="App" id='wrapper'>
          {gallery}
      </div>
    );
  }
}

export default Gallery;
