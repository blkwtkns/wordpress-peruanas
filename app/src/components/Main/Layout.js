// ./src/components/Main/Layout.js
import React from 'react';
import Footer from './Footer';
import Header from './Header'

export default (props) => (
  <section className="main-container">
    <Header />
    { props.children }
    <Footer />
  </section>
);
