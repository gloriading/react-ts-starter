/* eslint-disable @typescript-eslint/no-redeclare */
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import styles from './AddQuote.module.scss';
import BaseButton from '../utils/BaseButton';

interface AddQuote {
  addQuote: (content: string) => void;
  toggleForm: () => void;
}

function AddQuote({ addQuote, toggleForm }: AddQuote): JSX.Element {
  const [input, setInput] = useState('');

  const onClickAdd = () => {
    if (!input.trim()) {
      setInput('');
      return;
    }
    addQuote(input);
    setInput('');
    toggleForm();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClickAdd();
    }
  };

  return (
    <div className={styles.addQuote}>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        data-testid="add-quote-input"
      />
      <BaseButton type="btnPrimary" event={onClickAdd} display={<HiOutlinePlus />} data-testid="add-quote-btn" />
    </div>
  );
}

export default AddQuote;
