/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import { HiOutlineX } from 'react-icons/hi';
import styles from './Modal.module.scss';

interface Modal {
  showModal: boolean;
  closeModal: () => void;
  children: JSX.Element;
}

function Modal({ showModal, closeModal, children }: Modal): JSX.Element {
  const modalStyle = showModal ? `${styles.backDrop} ${styles.showModal}` : styles.backDrop;

  return (
    <div className={modalStyle}>
      <div className={styles.modalBody}>
        <HiOutlineX className={styles.closeBtn} onClick={closeModal} />
        {children}
      </div>
    </div>
  );
}

export default Modal;
