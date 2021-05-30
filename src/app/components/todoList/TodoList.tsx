import React from 'react';
import TodoItem, { Todo } from '../todoItem/TodoItem';
import styles from './TodoList.module.scss';

export interface TodoListProps {
  todos: Todo[];
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: string | number) => void;
}

function TodoList({ todos, updateTodo, deleteTodo }: TodoListProps): JSX.Element {
  return (
    <div className={styles.todoList}>
      {todos.map(({ id, content, isDone }) => (
        <TodoItem
          key={`todo-item-${id}`}
          id={id}
          content={content}
          isDone={isDone}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
