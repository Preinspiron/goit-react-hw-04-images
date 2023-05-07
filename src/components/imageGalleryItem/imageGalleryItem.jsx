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

export default ImageGalleryItem;
