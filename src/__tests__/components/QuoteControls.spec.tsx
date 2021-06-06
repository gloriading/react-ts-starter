import React from 'react';
import { render, cleanup, configure } from '@testing-library/react';

import { QuoteControls } from 'components';

describe('<QuoteControls />', () => {
  beforeEach(() => {
    configure({
      throwSuggestions: true,
    });
  });

  afterEach(cleanup);

  const defaultProps: QuoteControls = {
    deleteQuote: jest.fn(),
    toggleArchive: jest.fn(),
    toggleFav: jest.fn(),
    isFav: false,
    isArchived: false,
  };

  it('renders 3 buttons', () => {
    const { getByTestId } = render(<QuoteControls {...defaultProps} />);
    const container = getByTestId('quote-controls');
    const buttons = container.getElementsByClassName('btnPrimary');
    expect(buttons.length).toBe(3);
  });
});
