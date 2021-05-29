import React from 'react';
import styles from './BaseButton.module.scss';

interface Props {
  type: string;
  event: () => void;
  display: string;
}

function BaseButton({ type, event, display }: Props): JSX.Element {
  const btnClass = styles[type] || '';

  return (
    <div className={btnClass} onClick={event} aria-hidden="true">
      {display}
    </div>
  );
}

export default BaseButton;
