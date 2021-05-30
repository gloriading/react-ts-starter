import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import TodoForm, { TodoFormProps } from '../../app/components/todoForm/TodoForm';

describe('<TodoForm />', () => {
  afterEach(cleanup);

  const addTodoFn = jest.fn();
  const toggleForm = jest.fn();

  const defaultProps: TodoFormProps = {
    addTodo: addTodoFn,
    toggleForm,
  };

  test('sets the input value on change and clears the input value when click on enter key', () => {
    const { getByTestId } = render(<TodoForm {...defaultProps} />);
    const inputElm = getByTestId('todo-form-input') as HTMLInputElement;

    const inputVal = 'test';
    fireEvent.change(inputElm, { target: { value: inputVal } });
    expect(inputElm.value).toBe(inputVal);

    fireEvent.keyDown(inputElm, { key: 'Enter' });
    expect(inputElm.textContent).toBe('');
  });

  test('should clear input field with value only white spaces when clicks on the enter key', () => {
    const { getByTestId } = render(<TodoForm {...defaultProps} />);
    const inputElm = getByTestId('todo-form-input') as HTMLInputElement;

    const inputVal = ' ';
    fireEvent.change(inputElm, { target: { value: inputVal } });
    expect(inputElm.value).toBe(inputVal);

    fireEvent.keyDown(inputElm, { key: 'Enter' });
    expect(inputElm.textContent).toBe('');
  });

  test('does not clear the input value when click on a key other than "Enter"', () => {
    const { getByTestId } = render(<TodoForm {...defaultProps} />);
    const inputElm = getByTestId('todo-form-input') as HTMLInputElement;

    const inputVal = 'Test';
    fireEvent.change(inputElm, { target: { value: inputVal } });
    expect(inputElm.value).toBe(inputVal);

    fireEvent.keyDown(inputElm, { key: 'Alt' });
    expect(inputElm.textContent).toBe('');
  });
});
