import React, { Component } from 'react';
import firebase from './Firebase.js';
import './App.css';
import {Card, CardTitle, Row, Col} from 'react-materialize'


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
          url: stores[store].url,
          description: stores[store].description
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
        		reveal={<div className='gallery-card'><Row><Col s={12} className='grid-example'><p className='address'>{store.address1} {store.address2}</p></Col><Col s={12} className='grid-example'><p className='address'>{store.city}, {store.state} {store.zipCode}</p></Col></Row><Row><Col s={12} className='grid-example'><p className='website-url'><a href="{store.url}">{store.name} Website</a></p></Col></Row></div>}>
            <p className='rating'>Price Range: {store.priceRange}</p>
        </Card>
        </div>
      )
    });
    console.log('Current App State:', this.state);
    return (
      <div className="App" id='wrapper'>
          <Col s={6} className='grid-example'>
            {gallery}
          </Col>
      </div>
    );
  }
}

export default Gallery;
