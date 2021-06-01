import React, { MouseEvent } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import styles from './OneQuote.module.scss';
import BaseButton from '../utils/BaseButton';

export interface Quote {
  id: string | number;
  content: string;
  isHighlight: boolean;
}
export interface QuoteProps extends Quote {
  updateQuote: (quote: Quote) => void;
  deleteQuote: (id: string | number) => void;
}

function OneQuote({ id, content, isHighlight, updateQuote, deleteQuote }: QuoteProps): JSX.Element {
  const toggleHighlight = () => {
    updateQuote({ id, content, isHighlight: !isHighlight });
  };

  const onClickDelete = (e?: MouseEvent<HTMLElement>) => {
    if (e) e.stopPropagation();
    deleteQuote(id);
  };

  const quoteStyls = `${styles.oneQuote} ${isHighlight ? styles.highlight : ''}`;

  return (
    <div className={quoteStyls} onClick={toggleHighlight} aria-hidden="true">
      <p>{content}</p>
      <BaseButton type="btnIcon" event={onClickDelete} display={<FaRegTrashAlt />} />
    </div>
  );
}

export default OneQuote;
