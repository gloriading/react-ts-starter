import React from 'react';
import OneQuote, { Quote } from '../quote/OneQuote';
import styles from './QuoteList.module.scss';

export interface QuoteListProps {
  quotes: Quote[];
  updateQuote: (quote: Quote) => void;
  deleteQuote: (id: string | number) => void;
}

function QuoteList({ quotes, updateQuote, deleteQuote }: QuoteListProps): JSX.Element {
  return (
    <div className={styles.quoteList}>
      {quotes.map((quote) => (
        <OneQuote key={`one-quote-${quote.id}`} {...quote} updateQuote={updateQuote} deleteQuote={deleteQuote} />
      ))}
    </div>
  );
}

export default QuoteList;
