/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import {
  HiHeart,
  HiPencilAlt,
  HiOutlineX,
  HiOutlineTrash,
  HiOutlineArchive,
  HiArrowNarrowUp,
  HiArrowNarrowDown,
} from 'react-icons/hi';
import { BaseButton } from 'components';
import styles from './ToolBar.module.scss';

interface ToolBar {
  showForm: boolean;
  toggleForm: () => void;
  deleteQuotes: () => void;
  addToFavs: () => void;
  addToArchieved: () => void;
}

function ToolBar({ showForm, toggleForm, deleteQuotes, addToFavs, addToArchieved }: ToolBar): JSX.Element {
  const defaultEVent = () => {};

  return (
    <div className={styles.toolBar} data-testid="tool-bar">
      <BaseButton type="btnPrimary" display={showForm ? <HiOutlineX /> : <HiPencilAlt />} event={toggleForm} />
      <BaseButton type="btnPrimary" display={<HiHeart color="deeppink" />} event={addToFavs} />
      <BaseButton type="btnPrimary" display={<HiOutlineArchive />} event={addToArchieved} />
      <BaseButton type="btnPrimary" display={<HiOutlineTrash />} event={deleteQuotes} />
      <div className={styles.spacer} />
      <BaseButton type="btnPrimary" display={<HiArrowNarrowUp />} event={defaultEVent} />
      <BaseButton type="btnPrimary" display={<HiArrowNarrowDown />} event={defaultEVent} />
    </div>
  );
}

export default ToolBar;
