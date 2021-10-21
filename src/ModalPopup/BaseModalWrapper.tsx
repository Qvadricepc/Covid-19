import React from 'react';
import Modal from './Modal';

interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({ onBackdropClick, isModalVisible }) => {
  if (!isModalVisible) {
    return null;
  }
  return (
    <Modal onBackdropClick={onBackdropClick}>
      <div className="modal__container">
        <div className="modal__country-name">Country name</div>
        <div className="modal__table">
          <div className="modal__table-icon">1</div>
          <div className="modal__table-text">Total Confirmed</div>
          <div className="modal__table-number">300000</div>
        </div>
        <div className="modal__table">
          <div className="modal__table-icon">1</div>
          <div className="modal__table-text">Total Deaths</div>
          <div className="modal__table-number">300</div>
        </div>
        <div className="modal__table">
          <div className="modal__table-icon">1</div>
          <div className="modal__table-text">Total Recovered</div>
          <div className="modal__table-number">3000</div>
        </div>
        <button className="modal__button">OK</button>
      </div>
    </Modal>
  );
};

export default BaseModalWrapper;
