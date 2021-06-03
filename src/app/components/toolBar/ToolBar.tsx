import React from 'react';
import { HiHeart, HiOutlinePlus, HiOutlineMinus, HiOutlineTrash, HiOutlineArchive } from 'react-icons/hi';
import styles from './ToolBar.module.scss';
import BaseButton from '../utils/BaseButton';

export interface ToolBarProps {
  showForm: boolean;
  toggleForm: () => void;
  deleteQuotes: () => void;
}

function ToolBar({ showForm, toggleForm, deleteQuotes }: ToolBarProps): JSX.Element {
  const defaultFn = () => {};

  return (
    <div className={styles.toolBar}>
      <BaseButton type="btnPrimary" display={showForm ? <HiOutlineMinus /> : <HiOutlinePlus />} event={toggleForm} />
      <BaseButton type="btnPrimary" display={<HiHeart color="deeppink" />} event={defaultFn} />
      <BaseButton type="btnPrimary" display={<HiOutlineArchive />} event={defaultFn} />
      <BaseButton type="btnPrimary" display={<HiOutlineTrash />} event={deleteQuotes} />
    </div>
  );
}

export default ToolBar;
