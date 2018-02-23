// ./src/components/Dancers.js
import React from 'react';
import { Jumbotron, PageHeader } from 'react-bootstrap';
/* import DancersCarousel from './DancersCarousel'; */
import ImageCarousel from '../ImageCarousel';
import { dancers } from '../../constants/photoState';


export default (props) => (
  <section className='dancersSection'>
    <Jumbotron className='dancers'>
      <PageHeader>Dancers of Raices Peruanas</PageHeader>
      <ImageCarousel images={dancers}/>
    </Jumbotron>
  </section>
);

