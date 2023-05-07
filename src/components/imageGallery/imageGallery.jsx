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

export default ImageGallery;
