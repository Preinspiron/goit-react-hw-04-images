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
  const [page, setPage] = useState(0);
  const [largeimg, setLargeimg] = useState('');

  useEffect(() => {
    console.log(filter);
    filter &&
      axios({ params: { page, q: filter, per_page: 12 } })
        .then(r => setData(pr => [...pr, ...r.data.hits]))
        .catch(console.log)
        .finally(setLoader(false));
  }, [page, loader]);

  // function modal() {
  //   console.log(modalRef);
  // }
  const handleSubmit = () => {
    setLoader(true);
    setData([]);
    setPage(1);
    console.log(this);
  };
  const onChange = e => {
    console.log(this);
    setFilter(e.target.value);
  };

  function toggleModal(e) {
    console.log(this);
    setShowModal(modal => !modal);
    if (!showModal) setLargeimg(e.target.dataset.largeimg);
  }

  const loadMore = a => {
    setPage(pr => pr + 1);
    setLoader(true);
    // console.log(modalRef);
  };

  return (
    <div className="container">
      {showModal && <Modal large={largeimg} onClose={toggleModal} />}

      <Searchbar onSubmit={handleSubmit} value={filter} onChange={onChange} />
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
