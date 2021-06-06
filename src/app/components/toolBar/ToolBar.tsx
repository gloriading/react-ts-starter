/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import { HiPencilAlt, HiOutlineX } from 'react-icons/hi';
import { BaseButton } from 'components';
import styles from './ToolBar.module.scss';

interface ToolBar {
  showForm: boolean;
  toggleForm: () => void;
}

function ToolBar({ showForm, toggleForm }: ToolBar): JSX.Element {
  return (
    <div className={styles.toolBar} data-testid="tool-bar">
      <BaseButton type="btnPrimary" display={showForm ? <HiOutlineX /> : <HiPencilAlt />} event={toggleForm} />
    </div>
  );
}

export default ToolBar;
