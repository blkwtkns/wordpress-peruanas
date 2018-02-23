import React from 'react';
import { Jumbotron, Carousel, Image } from 'react-bootstrap';

    // <div className={'jumboCarousel ' + props.clName}> 
  // </div>
// className={'ImageCarousel'}
export default (props) => {
  return (
    <div className='ImageCarousel'>
      <Carousel>
        { 
          props.images.map((pic, i) => {
          return <Carousel.Item key={i}><Image src={pic} key={i} /></Carousel.Item>
          }) 
        }
      </Carousel>
    </div>
  );
}
