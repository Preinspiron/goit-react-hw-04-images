import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import Items from '../imageGalleryItem/imageGalleryItem';

const Image = createContext(null);
export const useImage = () => useContext(Image);

const ImageGallery = ({ response, onclick }) => {
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
};

ImageGallery.propTypes = {
  response: PropTypes.array,
  onClick: PropTypes.func,
};

export default ImageGallery;
