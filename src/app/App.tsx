import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
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
  {
    id: 3,
    content: 'content 1',
    isDone: false,
  },
  {
    id: 4,
    content: 'content 2',
    isDone: false,
  },
  {
    id: 5,
    content: 'content 5',
    isDone: false,
  },
  {
    id: 6,
    content: 'content 6',
    isDone: false,
  },
  {
    id: 7,
    content: 'content 7',
    isDone: false,
  },
  {
    id: 8,
    content: 'content 8',
    isDone: false,
  },
  {
    id: 9,
    content: 'content 9',
    isDone: false,
  },
  {
    id: 10,
    content: 'content 10',
    isDone: false,
  },
  {
    id: 11,
    content: 'content 11',
    isDone: false,
  },
  {
    id: 12,
    content: 'content 12',
    isDone: false,
  },
];

export function App(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>(mockTodos);
  const [showForm, setShowForm] = useState<boolean>(false);

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

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        {showForm && <TodoForm addTodo={addTodo} toggleForm={toggleForm} />}
        <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      </div>

      <div className={styles.controls}>
        <div className={styles.showFormBtn} onClick={toggleForm} aria-hidden="true">
          {showForm ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
    </div>
  );
}
