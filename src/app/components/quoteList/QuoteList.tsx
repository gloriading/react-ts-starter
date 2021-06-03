/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import OneQuote, { Quote } from '../quote/OneQuote';
import styles from './QuoteList.module.scss';

interface QuoteList {
  quotes: Quote[];
  updateQuote: (quote: Quote) => void;
}

function QuoteList({ quotes, updateQuote }: QuoteList): JSX.Element {
  return (
    <div className={styles.quoteList}>
      {quotes.map((quote) => (
        <OneQuote key={`one-quote-${quote.id}`} {...quote} updateQuote={updateQuote} data-testid="one-quote" />
      ))}
    </div>
  );
}

export default QuoteList;
