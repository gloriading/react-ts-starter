import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import styles from './TodoForm.module.scss';
import BaseButton from '../utils/BaseButton';

interface Props {
  addTodo: (content: string) => void;
}

function TodoForm({ addTodo }: Props): JSX.Element {
  const [input, setInput] = useState('');

  const onClickAdd = () => {
    if (!input.trim()) return;
    addTodo(input);
    setInput('');
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
    <div className={styles.todoForm}>
      <input type="text" value={input} onChange={handleInputChange} onKeyDown={handleKeyDown} />
      <BaseButton type="btnOutlined" event={onClickAdd} display="Add" />
    </div>
  );
}

export default TodoForm;
