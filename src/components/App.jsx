import { Component } from 'react';
import axios from './APIs/axios';
import Searchbar from '../components/searchbar/Searchbar';
import Modal from '../components/modal/modal';
import ImageGallery from '../components/imageGallery/imageGallery';
import { Triangle } from 'react-loader-spinner';
// import { ReactPortal } from 'react';

export class App extends Component {
  state = {
    data: [],
    filter: '',
    loader: false,
    loadmore: false,
    showModal: false,
    page: 1,
    largeimg: '',
  };

  handleSubmit = async () => {
    this.setState({ loader: true, data: [], page: 1 });

    const response = await axios({ params: { q: this.state.filter } });
    const {
      data: { hits },
    } = response;
    this.setState(() => ({ data: hits, page: this.state.page + 1 }));

    this.setState({ loader: false });
  };

  onChange = e => {
    this.setState({ filter: e.target.value });
  };

  toggleModal = e => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    if (!this.state.showModal)
      this.setState({ largeimg: e.target.dataset.largeimg });
  };

  loadMore = async () => {
    try {
      this.setState(({ page }) => ({ page: page + 1 }));
      const responseData = await axios({
        params: { page: this.state.page, q: this.state.filter },
      });
      this.setState(({ data }) => ({
        data: [...data, ...responseData.data.hits],
      }));
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  handlemodal = e => {
    if (e.currentTarget === e.target) this.setState({ showModal: false });
  };

  render() {
    const { handleSubmit, onChange } = this;
    const { filter, showModal, loader, data } = this.state;
    console.log(loader);
    const loadmoreBtn = data.length > 1;
    const largeIMG = this.state.largeimg;
    return (
      <div className="container">
        {showModal && <Modal large={largeIMG} onClose={this.toggleModal} />}

        <Searchbar onSubmit={handleSubmit} value={filter} onChange={onChange} />
        <ImageGallery response={data} onClick={this.toggleModal} />
        <Triangle
          // height="80"
          // width="80"
          // color="#4fa94d"
          ariaLabel="triangle-loading"
          // wrapperStyle={{}}
          wrapperClassName=""
          visible={loader}
        />
        {loadmoreBtn && (
          <button type="button" onClick={this.loadMore} className="Button">
            load more
          </button>
        )}
      </div>
    );
  }
}
