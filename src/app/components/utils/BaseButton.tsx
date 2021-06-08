/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-redeclare */
import React, { ReactNode, MouseEvent } from 'react';
import styles from './BaseButton.module.scss';

interface BaseButton {
  type: string;
  event: (e?: MouseEvent<HTMLElement>) => void;
  display: string | ReactNode;
  disabled?: boolean;
}

function BaseButton({ type, event, display, disabled = false }: BaseButton): JSX.Element {
  return (
    <div
      className={disabled ? `${styles.noPointer} ${styles[type]}` : styles[type]}
      onClick={event}
      aria-hidden="true"
      data-testid="base-button"
    >
      {display}
    </div>
  );
}

export default BaseButton;
