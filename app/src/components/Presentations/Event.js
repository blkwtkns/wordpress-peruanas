// ./src/components/Presentations/Events.js
import React from 'react';

export default (props) => {
  return (
    <div className="event">
      <h1 className="event-date">{props.info.date}</h1>
      <h3 className="event-info">{props.info.location}</h3>
      <h3 className="event-info">{props.info.about ? props.info.about : null}</h3>
      <h3 className="event-info">{props.info.time ? props.info.time : null}</h3>
      <h3 className="event-info">{props.info.address ? props.info.address : null}</h3>
    </div>
  );
}
