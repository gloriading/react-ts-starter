import React, { ReactNode, MouseEvent } from 'react';
import styles from './BaseButton.module.scss';

export interface ButtonProps {
  type: string;
  event: (e?: MouseEvent<HTMLElement>) => void;
  display: string | ReactNode;
}

function BaseButton({ type, event, display }: ButtonProps): JSX.Element {
  return (
    <div className={styles[type]} onClick={event} aria-hidden="true" data-testid="base-button">
      {display}
    </div>
  );
}

export default BaseButton;
