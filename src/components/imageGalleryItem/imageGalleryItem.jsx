import { useRef } from 'react';
import PropTypes from 'prop-types';
import { useImage } from 'components/imageGallery/imageGallery';
const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onClick,
  index,
}) => {
  const modalRef = useRef(largeImageURL);

  console.log(useImage());
  return (
    <li key={index} className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt={tags}
        onClick={onClick}
        data-largeimg={largeImageURL}
        ref={modalRef}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  onClick: PropTypes.func,
  index: PropTypes.number,
};
export default ImageGalleryItem;
