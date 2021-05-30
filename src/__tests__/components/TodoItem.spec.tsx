import React from 'react';
import { render, cleanup, configure, fireEvent } from '@testing-library/react';

import TodoItem, { TodoProps } from '../../app/components/todoItem/TodoItem';

describe('<TodoItem />', () => {
  beforeEach(() => {
    configure({
      throwSuggestions: true,
    });
  });

  afterEach(cleanup);

  const mockTodo = {
    id: 10,
    content: 'Mock Content',
    isDone: false,
  };

  const updateTodo = jest.fn();
  const deleteTodo = jest.fn();

  const defaultProps: TodoProps = {
    ...mockTodo,
    updateTodo,
    deleteTodo,
  };

  test('the text content is rendered', () => {
    const { getByText } = render(<TodoItem {...defaultProps} />);
    const contentElm = getByText(/mock content/i);
    expect(contentElm.textContent).toBe(mockTodo.content);
  });

  test('buttons are rendered', () => {
    const { getByTestId } = render(<TodoItem {...defaultProps} />);
    const btnContainer = getByTestId('action-container');
    const [statusBtn, deleteBtn] = btnContainer.getElementsByClassName('btnOutlined');

    expect(statusBtn.textContent).toBe('Not Done');
    expect(deleteBtn.textContent).toBe('Delete');
  });

  test('events are called when buttons are clicked', () => {
    const { getByTestId } = render(<TodoItem {...defaultProps} />);
    const btnContainer = getByTestId('action-container');
    const [statusBtn, deleteBtn] = btnContainer.getElementsByClassName('btnOutlined');

    fireEvent.click(deleteBtn);
    expect(deleteTodo).toHaveBeenCalled();

    fireEvent.click(statusBtn);
    expect(updateTodo).toHaveBeenCalled();
  });

  test('status button display updates when the status is updated', () => {
    const { getByTestId, rerender } = render(<TodoItem {...defaultProps} />);
    const btnContainer = getByTestId('action-container');
    const [statusBtn] = btnContainer.getElementsByClassName('btnOutlined');

    expect(statusBtn.textContent).toBe('Not Done');

    rerender(<TodoItem {...defaultProps} isDone />);
    expect(statusBtn.textContent).toBe('Done');
  });
});
