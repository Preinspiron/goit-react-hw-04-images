import PropTypes from 'prop-types';
const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onClick,
  index,
}) => (
  <li key={index} className="ImageGalleryItem">
    <img
      className="ImageGalleryItem-image"
      src={webformatURL}
      alt={tags}
      onClick={onClick}
      data-largeimg={largeImageURL}
    />
  </li>
);
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  onClick: PropTypes.func,
  index: PropTypes.number,
};
export default ImageGalleryItem;
