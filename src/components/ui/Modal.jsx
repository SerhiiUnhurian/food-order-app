import ReactDOM from 'react-dom';
import Card from './Card';
import clss from './Modal.module.css';

const Backdrop = ({ onClose }) => {
  return <div className={clss.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <Card className={clss.modal}>
      <div className={clss.content}>{children}</div>
    </Card>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ children, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <Backdrop onClose={onClose} />
          <ModalOverlay>{children}</ModalOverlay>
        </>,
        portalElement
      )}
    </>
  );
};

export default Modal;
