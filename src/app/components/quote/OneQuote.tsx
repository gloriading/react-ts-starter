/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import { QuoteControls } from 'components';
import styles from './OneQuote.module.scss';

export interface Quote {
  id: number;
  content: string;
  isFav: boolean;
  isArchived: boolean;
}
interface OneQuote extends Quote {
  handleQuoteUpdate: (quote: Quote) => void;
  handleQuoteDelete: (id: number) => void;
}

function OneQuote({ id, content, isFav, isArchived, handleQuoteUpdate, handleQuoteDelete }: OneQuote): JSX.Element {
  const baseQuote = { id, content, isArchived, isFav };

  const toggleFav = () => {
    handleQuoteUpdate({ ...baseQuote, isFav: !isFav });
  };

  const toggleArchive = () => {
    handleQuoteUpdate({ ...baseQuote, isArchived: !isArchived });
  };

  const deleteQuote = () => {
    handleQuoteDelete(id);
  };

  return (
    <div className={styles.oneQuote} aria-hidden="true" data-testid="one-quote">
      <p>{content}</p>
      <QuoteControls
        deleteQuote={deleteQuote}
        toggleArchive={toggleArchive}
        toggleFav={toggleFav}
        isFav={isFav}
        isArchived={isArchived}
      />
    </div>
  );
}

export default OneQuote;
