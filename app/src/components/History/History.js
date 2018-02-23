// ./src/components/History.js
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import ImageCarousel from '../ImageCarousel';
import { history } from '../../constants/photoState';
import EngHistory from './EngHistory';
import EspHistory from './EspHistory';
import Separator from '../SepComponent';

export default (props) => (
  <section className="historySection">
    <EngHistory />
    <Separator />
    <ImageCarousel images={history}/>
    <Separator />
    <EspHistory />
  </section>
);

