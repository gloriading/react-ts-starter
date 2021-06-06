import React from 'react';
import { render, cleanup, configure } from '@testing-library/react';
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
    isFav: false,
    isArchived: false,
  };

  const mockUpdateQuote = jest.fn();
  const mockDeleteQuote = jest.fn();

  const defaultProps: OneQuote = {
    ...mockQuote,
    handleQuoteDelete: mockUpdateQuote,
    handleQuoteUpdate: mockDeleteQuote,
  };

  test('the text content is rendered', () => {
    const { getByText } = render(<OneQuote {...defaultProps} />);
    const contentElm = getByText(/mock content/i);
    expect(contentElm.textContent).toBe(mockQuote.content);
  });
});
