import React from 'react';
import {
  Image,
  Navbar,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logos } from '../../constants/photoState';


export default (props) => {
  return (
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/">
          <a href="#">
            <Image className="raicesLogo" src={ logos[0] } circle/> 
            <span className='title'>RaicesPeruanas</span>
          </a>
        </LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  )
};
