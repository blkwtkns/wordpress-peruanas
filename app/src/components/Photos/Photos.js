// ./src/components/Photos.js
import React from 'react';
import { PageHeader } from 'react-bootstrap';
/* import ImageCarousel from '../ImageCarousel'; */
import { photos } from '../../constants/photoState';
import Gallery from 'react-grid-gallery';

export default (props) => {

  return (
    <section className='photosSection'>
        <div className='container'>
          <PageHeader> Photos Peruanos </PageHeader>
          <Gallery className={'PhotoGallery'} 
            images={photos.map(pic => {
              return {
                src: pic,
                thumbnail: pic,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
              }
            })} 
          />
        </div>
    </section>

  );
}
