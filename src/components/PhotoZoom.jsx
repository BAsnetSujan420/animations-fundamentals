import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 8px;
`;

const ThumbnailLink = styled.a``;

const Thumbnail = styled.img`
  display: block;
  width: 100%;
`;

export default function PhotoZoom() {
  const images = [
    {
      src: 'https://courses.joshwcomeau.com/cfj-mats/article-image-balloons.jpg',
      alt: 'A balloon store',
    },
    {
      src: 'https://courses.joshwcomeau.com/cfj-mats/article-image-spot.jpg',
      alt: 'A good-boy dog. Black and white.',
    },
    {
      src: 'https://courses.joshwcomeau.com/cfj-mats/article-image-standing.jpg',
      alt: 'A cardboard standing-desk tool.',
    },
    {
      src: 'https://courses.joshwcomeau.com/cfj-mats/article-image-car.jpg',
      alt: 'A “tokyo drift” style sports car',
    },
    {
      src: 'https://courses.joshwcomeau.com/cfj-mats/article-image-flower-boy.jpg',
      alt: 'A young man amongst daisies in a field',
    },
  ];

  return (
    <Wrapper>
      {images.map((img, index) => (
        <ThumbnailLink key={index} href="/">
          <Thumbnail src={img.src} alt={img.alt} />
        </ThumbnailLink>
      ))}
    </Wrapper>
  );
}
