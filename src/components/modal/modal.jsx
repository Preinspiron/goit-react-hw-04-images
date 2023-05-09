import PropTypes from 'prop-types';
import { Component } from 'react';
class Modal extends Component {
  handleClose = e => {
    if (e.key === 'Escape') this.props.onClose();
    window.removeEventListener(this.listeningEscape);
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClose);
  }

  render() {
    const { large, onClose } = this.props;
    return (
      <div
        className="Overlay"
        onClick={e => {
          if (e.currentTarget === e.target) onClose(e);
        }}
      >
        <div className="Modal">
          <img src={large} alt="2" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  OnClose: PropTypes.func,
  large: PropTypes.string,
};
export default Modal;
