import React, { Component } from 'react';

import './shoppinglist.component.css'

import {
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';


import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';


export default class ShoppsingList extends Component {

  state = {
    items: [
      { id: uuidv4(), name: 'Eggs' },
      { id: uuidv4(), name: 'Msilk' },
      { id: uuidv4(), name: 'Fish' },
      { id: uuidv4(), name: 'Meat' },
      { id: uuidv4(), name: 'Water' }
    ]
  }


  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button color="dark" style={{ marginBottom: '2rem' }} onClick={() => {
          const name = prompt('Enter Name');
          if (name) {
            this.setState(state => ({
              items: [...state.items, { id: uuidv4(), name }]
            }));
          }
        }}>Add Item
      </Button>
        <ListGroup>
          {items.map(({ id, name }) => (
              <ListGroupItem>
                <Button className="remove-btn" color="danger" size="sm" onClick={() => {
                  this.setState(state => ({
                    items: state.items.filter(item => item.id != id)
                  }));
                }}>&times;
                  </Button>
                {name}
              </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}
