import React from 'react';
import { render, cleanup } from '@testing-library/react';

import TodoList, { TodoListProps } from '../../app/components/todoList/TodoList';

describe('<TodoListProps />', () => {
  afterEach(cleanup);

  const mockTodos = [
    {
      id: 1,
      content: 'mock 1',
      isDone: false,
    },
  ];

  const defaultProps: TodoListProps = {
    todos: mockTodos,
    updateTodo: jest.fn(),
    deleteTodo: jest.fn(),
  };

  test('child component is rendered', () => {
    const { getByText } = render(<TodoList {...defaultProps} />);
    expect(getByText(/delete/i)).toBeInTheDocument();
  });
});
