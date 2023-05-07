import PropTypes from 'prop-types';
import Items from '../imageGalleryItem/imageGalleryItem';

const ImageGallery = ({ response, onClick }) => {
  const items = response.map(({ webformatURL, largeImageURL, tags }, index) => (
    <Items
      key={index}
      webformatURL={webformatURL}
      onClick={onClick}
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
