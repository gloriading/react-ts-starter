import React from 'react';
import styles from './OneQuote.module.scss';

export interface Quote {
  id: string | number;
  content: string;
  isHighlight: boolean;
}
export interface QuoteProps extends Quote {
  updateQuote: (quote: Quote) => void;
}

function OneQuote({ id, content, isHighlight, updateQuote }: QuoteProps): JSX.Element {
  const toggleHighlight = () => {
    updateQuote({ id, content, isHighlight: !isHighlight });
  };

  const quoteStyls = `${styles.oneQuote} ${isHighlight ? styles.highlight : ''}`;

  return (
    <div className={quoteStyls} onClick={toggleHighlight} aria-hidden="true">
      <p>{content}</p>
    </div>
  );
}

export default OneQuote;
