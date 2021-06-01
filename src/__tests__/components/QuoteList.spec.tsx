import React from 'react';
import { render, cleanup } from '@testing-library/react';

import QuoteList, { QuoteListProps } from '../../app/components/quoteList/QuoteList';

describe('<QuoteList />', () => {
  afterEach(cleanup);

  const mockQuotes = [
    {
      id: 1,
      content: 'mock 1',
      isHighlight: false,
    },
  ];

  const defaultProps: QuoteListProps = {
    quotes: mockQuotes,
    updateQuote: jest.fn(),
    deleteQuote: jest.fn(),
  };

  test('child component is rendered', () => {
    const { getByText } = render(<QuoteList {...defaultProps} />);
    expect(getByText(/delete/i)).toBeInTheDocument();
  });
});
