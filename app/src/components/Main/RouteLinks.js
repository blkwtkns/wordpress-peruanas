// ./src/components/Main/RouteLinks.js
import React from 'react';
import {
  NavItem,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default (props) => {

  return (
    <div className="routeLinks">
      <LinkContainer to="presentations"><NavItem eventKey={2} href="#">Presentations</NavItem></LinkContainer>
      <LinkContainer to="dances"><NavItem eventKey={3} href="#">Dances</NavItem></LinkContainer>
      <LinkContainer to="photos"><NavItem eventKey={4} href="#">Photos</NavItem></LinkContainer>
      <LinkContainer to="history"><NavItem eventKey={5} href="#">History</NavItem></LinkContainer>
      <LinkContainer to="dancers"><NavItem eventKey={6} href="#">Dancers</NavItem></LinkContainer>
      <LinkContainer to="contact"><NavItem eventKey={7} href="#">Contact</NavItem></LinkContainer>
    </div>
  )
};
