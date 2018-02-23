// ./src/components/Presentations/Presentations.js
import React from 'react';
import Event from './Event';
import { PageHeader } from 'react-bootstrap';
import Separator from '../SepComponent';
import info from '../../constants/presentationInfo';

export default (props) => {
  return (
    <section className="presentationsSection">
      <div className="container">

        <PageHeader> Upcoming Presentations </PageHeader>
        { 
          !info.upcomingPerformances.length ? [<Event info={info.default[0]} key={1}/>] :
          info.upcomingPerformances.map((el, idx, arr) => {
            return idx === arr.length - 1 ? <Event info={el} key={idx} /> : [<Event info={el} key={idx} />, <Separator />];
          })
        }

        <PageHeader> Past Presentations </PageHeader>
        { 
          info.pastPerformances.map((el, idx, arr) => {
            return idx === arr.length - 1 ? <Event info={el} key={idx} /> : [<Event info={el} key={idx} />, <Separator />];
          })
        }
      </div>
    </section>
  );
}

