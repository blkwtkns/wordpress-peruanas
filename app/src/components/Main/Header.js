// ./src/components/Main/Header.js
import React from 'react';
import {
  Navbar,
  Nav
} from 'react-bootstrap';
import NavBrand from './NavBrand';
import RouteLinks from './RouteLinks';
import SocialLinks from './SocialLinks';

export default (props) => {
  return (
    <Navbar fluid fixedTop className="navMain" collapseOnSelect>
      <NavBrand />
      <Navbar.Collapse>
        <Nav pullRight className="links">
          <RouteLinks />
          <SocialLinks />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
