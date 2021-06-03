import React from 'react';
import { render, cleanup, configure, fireEvent } from '@testing-library/react';
import { OneQuote } from 'components';

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
    isFav: false,
    isArchived: false,
  };

  const mockUpdateQuote = jest.fn();

  const defaultProps: OneQuote = {
    ...mockQuote,
    updateQuote: mockUpdateQuote,
  };

  test('the text content is rendered', () => {
    const { getByText } = render(<OneQuote {...defaultProps} />);
    const contentElm = getByText(/mock content/i);
    expect(contentElm.textContent).toBe(mockQuote.content);
  });

  test('the quote status is toggled on click', () => {
    const { getByTestId } = render(<OneQuote {...defaultProps} />);
    const quoteElm = getByTestId('one-quote');
    fireEvent.click(quoteElm);
    expect(mockUpdateQuote).toHaveBeenCalled();
  });

  test('classNames are set correctly', () => {
    const updatedMockQuote = { ...mockQuote, isHighlight: true };
    const { getByTestId } = render(<OneQuote {...defaultProps} {...updatedMockQuote} />);
    const quoteElm = getByTestId('one-quote');

    expect(quoteElm.classList.contains('oneQuote')).toBeTruthy();
    expect(quoteElm.classList.contains('highlight')).toBeTruthy();
  });
});
