import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import styles from './AddQuote.module.scss';
import BaseButton from '../utils/BaseButton';

export interface AddQuoteProps {
  addQuote: (content: string) => void;
  toggleForm: () => void;
}

function AddQuote({ addQuote, toggleForm }: AddQuoteProps): JSX.Element {
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
      <BaseButton type="btnOutlined" event={onClickAdd} display="Add" data-testid="add-quote-btn" />
    </div>
  );
}

export default AddQuote;
