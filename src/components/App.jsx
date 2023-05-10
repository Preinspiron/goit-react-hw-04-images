import { useState, useEffect } from 'react';
import axios from '../APIs/axios';
import Searchbar from '../components/searchbar/Searchbar';
import Modal from '../components/modal/modal';
import ImageGallery from '../components/imageGallery/imageGallery';
import { Triangle } from 'react-loader-spinner';
// import { ReactPortal } from 'react';

export const App = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [largeimg, setLargeimg] = useState('');

  useEffect(() => {
    filter &&
      axios({ params: { page, q: filter, per_page: 12 } })
        .then(r => setData(pr => [...pr, ...r.data.hits]))
        .catch(console.log)
        .finally(setLoader(false));
  }, [page, filter, data]);

  const handleSubmit = search => {
    setFilter(search);
    setLoader(true);
    setData([]);
    setPage(1);
  };

  function toggleModal(e) {
    setShowModal(modal => !modal);
    if (!showModal) setLargeimg(e.target.dataset.largeimg);
  }

  const loadMore = a => {
    setPage(pr => pr + 1);
  };

  return (
    <div className="container">
      {showModal && <Modal large={largeimg} onClose={toggleModal} />}

      <Searchbar onSubmit={handleSubmit} value={filter} />
      <ImageGallery response={data} onclick={toggleModal} />
      <Triangle
        ariaLabel="triangle-loading"
        wrapperClassName=""
        visible={loader}
      />
      {data.length >= 12 && (
        <button type="button" onClick={loadMore} className="Button">
          {loader ? 'laoding...' : 'load more'}
        </button>
      )}
    </div>
  );
};
