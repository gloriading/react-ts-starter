/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import { HiHeart, HiOutlineHeart, HiOutlineTrash, HiArchive, HiOutlineArchive } from 'react-icons/hi';
import { BaseButton } from 'components';
import styles from './QuoteControls.module.scss';

interface QuoteControls {
  deleteQuote: () => void;
  toggleArchive: () => void;
  toggleFav: () => void;
  isFav: boolean;
  isArchived: boolean;
}

function QuoteControls({ deleteQuote, toggleArchive, toggleFav, isFav, isArchived }: QuoteControls): JSX.Element {
  const isFavDisplay = isFav ? <HiHeart color="#ff5252" /> : <HiOutlineHeart color="#ff5252" />;
  const isArchivedDisplay = isArchived ? <HiArchive color="#84817a" /> : <HiOutlineArchive color="#84817a" />;

  return (
    <div className={styles.controls} data-testid="quote-controls">
      <BaseButton type="btnPrimary" display={isFavDisplay} event={toggleFav} />
      <BaseButton type="btnPrimary" display={isArchivedDisplay} event={toggleArchive} />
      <BaseButton type="btnPrimary" display={<HiOutlineTrash color="gray" />} event={deleteQuote} />
    </div>
  );
}

export default QuoteControls;
