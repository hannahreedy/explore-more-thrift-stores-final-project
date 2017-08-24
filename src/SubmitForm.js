import React, { Component } from 'react';
import './App.css';
import {Button, Row, Input, Modal} from 'react-materialize'

class SubmitForm extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Modal
        header='Submit your favorite thrift store'
        trigger={<Button className='material-icons'>launch</Button>}>
        <Row>
          <Input s={12} label="Image Path" type='url' />
          <Input s={12} label="Store Name" type='text' />
          <Input s={6} type='select' label="Rating">
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </Input>
          <Input s={6} type='select' label="Price Range">
            <option value='1'>$</option>
            <option value='2'>$$</option>
            <option value='3'>$$$</option>
            <option value='4'>$$$$</option>
          </Input>
          <Input s={6} label="Address" />
          <Input s={6} label="Address 2" />
          <Input s={4} label="City" />
          <Input s={4} label="State" />
          <Input s={4} label="Zip Code" />
        </Row>
        <Row>
          <Input s={12} label="Website URL" type='url' />
        </Row>
        <Button>Submit</Button>
      </Modal>
    )
  }

}


export default SubmitForm;
