import { forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';
import Items from '../imageGalleryItem/imageGalleryItem';

const ImageGallery = forwardRef(({ response, onclick }, ref) => {
  const items = response.map(({ webformatURL, largeImageURL, tags }, index) => (
    <Items
      key={index}
      webformatURL={webformatURL}
      onClick={onclick}
      tags={tags}
      largeImageURL={largeImageURL}
    />
  ));
  return <ul className="ImageGallery">{items}</ul>;
});
ImageGallery.propTypes = {
  response: PropTypes.array,
  onClick: PropTypes.func,
};

export default ImageGallery;
