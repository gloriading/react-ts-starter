/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import OneQuote, { Quote } from '../quote/OneQuote';
import styles from './QuoteList.module.scss';

interface QuoteList {
  quotes: Quote[];
  handleQuoteDelete: (id: number) => void;
  handleQuoteUpdate: (quote: Quote) => void;
}

function QuoteList({ quotes, handleQuoteDelete, handleQuoteUpdate }: QuoteList): JSX.Element {
  return (
    <div className={styles.quoteList}>
      {quotes.map((quote) => (
        <OneQuote
          key={`one-quote-${quote.id}`}
          {...quote}
          handleQuoteDelete={handleQuoteDelete}
          handleQuoteUpdate={handleQuoteUpdate}
          data-testid="one-quote"
        />
      ))}
    </div>
  );
}

export default QuoteList;
