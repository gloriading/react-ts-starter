import React from 'react';
import styles from './TodoItem.module.scss';
import BaseButton from '../utils/BaseButton';

export interface Todo {
  id: string | number;
  content: string;
  isDone: boolean;
}
interface TodoProps extends Todo {
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: string | number) => void;
}

function TodoItem({ id, content, isDone, updateTodo, deleteTodo }: TodoProps): JSX.Element {
  const onClickStatusBtn = () => {
    updateTodo({ id, content, isDone: !isDone });
  };

  const onClickDelete = () => {
    deleteTodo(id);
  };

  return (
    <div className={styles.todoItem}>
      <p>{content}</p>
      <div>
        <BaseButton type="btnOutlined" event={onClickStatusBtn} display={isDone ? 'Done' : 'Not Done'} />
        <BaseButton type="btnOutlined" event={onClickDelete} display="Delete" />
      </div>
    </div>
  );
}

export default TodoItem;
