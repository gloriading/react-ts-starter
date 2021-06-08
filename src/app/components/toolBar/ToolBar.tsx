/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import { HiPencilAlt, HiOutlineX } from 'react-icons/hi';
import { BaseButton } from 'components';
import styles from './ToolBar.module.scss';

interface ToolBar {
  showForm: boolean;
  addQuote: () => void;
}

function ToolBar({ showForm, addQuote }: ToolBar): JSX.Element {
  return (
    <div className={styles.toolBar} data-testid="tool-bar">
      <BaseButton type="btnPrimary" display={showForm ? <HiOutlineX /> : <HiPencilAlt />} event={addQuote} />
    </div>
  );
}

export default ToolBar;
