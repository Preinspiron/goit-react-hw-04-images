import PropTypes from 'prop-types';
import { useEffect, useCallback } from 'react';
const Modal = ({ large, onClose }) => {
  const handleClose = useCallback(
    e => {
      if (e.key === 'Escape') onClose();
      console.log(e.key);
      console.log(111);
      // window.removeEventListener(this.listeningEscape);
    },
    [onClose]
  );
  useEffect(() => {
    window.addEventListener('keydown', handleClose);
    console.log('start');
  }, [handleClose]);

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, [handleClose]);

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
};

Modal.propTypes = {
  onClose: PropTypes.func,
  large: PropTypes.string,
};
export default Modal;
