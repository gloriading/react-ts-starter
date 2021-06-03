/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import styles from './OneQuote.module.scss';

export interface Quote {
  id: string | number;
  content: string;
  isHighlight: boolean;
  isFav: boolean;
  isArchived: boolean;
}
interface OneQuote extends Quote {
  updateQuote: (quote: Quote) => void;
}

function OneQuote({ id, content, isHighlight, isFav, isArchived, updateQuote }: OneQuote): JSX.Element {
  const toggleHighlight = () => {
    updateQuote({ id, content, isHighlight: !isHighlight, isFav, isArchived });
  };

  const quoteStyle = `${styles.oneQuote} ${isHighlight ? styles.highlight : ''}`;

  return (
    <div className={quoteStyle} onClick={toggleHighlight} aria-hidden="true" data-testid="one-quote">
      <p>{content}</p>
    </div>
  );
}

export default OneQuote;
