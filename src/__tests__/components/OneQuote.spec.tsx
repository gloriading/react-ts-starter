import React from 'react';
import { render, cleanup, configure, fireEvent } from '@testing-library/react';

import OneQuote, { QuoteProps } from '../../app/components/quote/OneQuote';

describe('<OneQuote />', () => {
  beforeEach(() => {
    configure({
      throwSuggestions: true,
    });
  });

  afterEach(cleanup);

  const mockQuote = {
    id: 10,
    content: 'Mock Content',
    isHighlight: false,
  };

  const mockUpdateQuote = jest.fn();
  const mockDeleteQuote = jest.fn();

  const defaultProps: QuoteProps = {
    ...mockQuote,
    updateQuote: mockUpdateQuote,
    deleteQuote: mockDeleteQuote,
  };

  test('the text content is rendered', () => {
    const { getByText } = render(<OneQuote {...defaultProps} />);
    const contentElm = getByText(/mock content/i);
    expect(contentElm.textContent).toBe(mockQuote.content);
  });

  test('buttons are rendered', () => {
    const { getByTestId } = render(<OneQuote {...defaultProps} />);
    const btnContainer = getByTestId('action-container');
    const [statusBtn, deleteBtn] = btnContainer.getElementsByClassName('btnOutlined');

    expect(statusBtn.textContent).toBe('Not Done');
    expect(deleteBtn.textContent).toBe('Delete');
  });

  test('events are called when buttons are clicked', () => {
    const { getByTestId } = render(<OneQuote {...defaultProps} />);
    const btnContainer = getByTestId('action-container');
    const [statusBtn, deleteBtn] = btnContainer.getElementsByClassName('btnOutlined');

    fireEvent.click(deleteBtn);
    expect(mockDeleteQuote).toHaveBeenCalled();

    fireEvent.click(statusBtn);
    expect(mockUpdateQuote).toHaveBeenCalled();
  });

  test('status button display updates when the status is updated', () => {
    const { getByTestId, rerender } = render(<OneQuote {...defaultProps} />);
    const btnContainer = getByTestId('action-container');
    const [statusBtn] = btnContainer.getElementsByClassName('btnOutlined');

    expect(statusBtn.textContent).toBe('Not Done');

    rerender(<OneQuote {...defaultProps} isHighlight />);
    expect(statusBtn.textContent).toBe('Done');
  });
});
