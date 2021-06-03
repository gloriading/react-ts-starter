import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { QuoteList } from 'components';

describe('<QuoteList />', () => {
  afterEach(cleanup);

  const mockQuotes = [
    {
      id: 1,
      content: 'mock 1',
      isHighlight: false,
      isFav: false,
      isArchived: false,
    },
    {
      id: 2,
      content: 'mock 2',
      isHighlight: false,
      isFav: false,
      isArchived: false,
    },
  ];

  const defaultProps: QuoteList = {
    quotes: mockQuotes,
    updateQuote: jest.fn(),
  };

  test('child component is rendered', () => {
    const { getAllByTestId } = render(<QuoteList {...defaultProps} />);
    const childrenCom = getAllByTestId('one-quote');
    expect(childrenCom).toHaveLength(mockQuotes.length);
  });
});
