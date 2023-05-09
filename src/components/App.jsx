import { Component } from 'react';
import axios from '../APIs/axios';
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
    showModal: false,
    page: 0,
    largeimg: '',
  };

  async componentDidUpdate(_, prevState) {
    const { page, loader } = this.state;
    console.log(prevState.page, page);
    try {
      if (loader) {
        const responseData = await axios({
          params: { page, q: this.state.filter },
        });
        this.setState(({ data }) => ({
          data: [...data, ...responseData.data.hits],
        }));
        console.log(prevState.page, page);
        this.setState({ loader: false });
      }
    } catch (error) {
      console.log(error);
    }
  }

  handleSubmit = async () => {
    this.setState({ loader: true, data: [], page: 1 });
  };

  onChange = e => {
    this.setState({ filter: e.target.value });
  };

  toggleModal = e => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    if (!this.state.showModal)
      this.setState({ largeimg: e.target.dataset.largeimg });
  };

  loadMore = async a => {
    this.setState(({ page, loader }) => ({ page: page + 1, loader: true }));
  };

  handlemodal = e => {
    if (e.currentTarget === e.target) this.setState({ showModal: false });
  };

  render() {
    const { handleSubmit, onChange } = this;
    const { filter, showModal, loader, data } = this.state;
    const largeIMG = this.state.largeimg;

    return (
      <div className="container">
        {showModal && <Modal large={largeIMG} onClose={this.toggleModal} />}

        <Searchbar onSubmit={handleSubmit} value={filter} onChange={onChange} />
        <ImageGallery response={data} onclick={this.toggleModal} />
        <Triangle
          ariaLabel="triangle-loading"
          wrapperClassName=""
          visible={loader}
        />
        {data.length >= 12 && (
          <button type="button" onClick={this.loadMore} className="Button">
            {loader ? 'laoding...' : 'load more'}
          </button>
        )}
      </div>
    );
  }
}
