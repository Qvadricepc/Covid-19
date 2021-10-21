import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__container">
        {children}
        <button className="modal__button">OK</button>
      </div>
    </div>,
    document.body
  );
};
