import React, { useState } from 'react';
import styles from './App.module.scss';
import TodoList from './components/todoList/TodoList';
import TodoForm from './components/todoForm/TodoForm';
import { Todo } from './components/todoItem/TodoItem';

const mockTodos: Todo[] = [
  {
    id: 1,
    content: 'content 1',
    isDone: false,
  },
  {
    id: 2,
    content: 'content 2',
    isDone: false,
  },
];

export function App(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>(mockTodos);

  const addTodo = (content: string) => {
    const newId = (todos[todos.length - 1].id as number) + 1;
    const isDone = false;
    setTodos((prevTodos) => [...prevTodos, { id: newId, content, isDone }]);
  };

  const updateTodo = (updatedTodo: Todo) => {
    const newTodos = todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo));
    setTodos(newTodos);
  };

  const deleteTodo = (id: string | number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className={styles.app}>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
