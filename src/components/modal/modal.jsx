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

export default Modal;
