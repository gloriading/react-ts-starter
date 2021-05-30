import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import styles from './TodoForm.module.scss';
import BaseButton from '../utils/BaseButton';

export interface TodoFormProps {
  addTodo: (content: string) => void;
  toggleForm: () => void;
}

function TodoForm({ addTodo, toggleForm }: TodoFormProps): JSX.Element {
  const [input, setInput] = useState('');

  const onClickAdd = () => {
    if (!input.trim()) {
      setInput('');
      return;
    }
    addTodo(input);
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
    <div className={styles.todoForm}>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        data-testid="todo-form-input"
      />
      <BaseButton type="btnOutlined" event={onClickAdd} display="Add" data-testid="todo-form-btn" />
    </div>
  );
}

export default TodoForm;
