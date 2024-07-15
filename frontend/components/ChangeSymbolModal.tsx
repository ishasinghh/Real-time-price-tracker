import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ChangeSymbolModal.module.css';
import { fetchData } from '../actions/dataActions';
import { AppDispatch } from '../store';

const ChangeSymbolModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSymbol, setSelectedSymbol] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSymbol(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedSymbol.trim()) {
      dispatch(fetchData(selectedSymbol));
    }
    closeModal();
  };

  return (
    <div className={styles.modalContainer}>
      <button className={styles.modalButton} onClick={openModal}>Change Stock/Crypto</button>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>&times;</span>
            <input
              type="text"
              value={selectedSymbol}
              onChange={handleChange}
              className={styles.symbolInput}
            />
            <button onClick={handleSubmit} className={styles.submitButton}>Change</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangeSymbolModal;
