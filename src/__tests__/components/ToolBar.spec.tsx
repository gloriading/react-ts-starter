import React from 'react';
import { render, cleanup, configure } from '@testing-library/react';

import { ToolBar } from 'components';

describe('<ToolBar />', () => {
  beforeEach(() => {
    configure({
      throwSuggestions: true,
    });
  });

  afterEach(cleanup);

  const mockToggleForm = jest.fn();

  const defaultProps: ToolBar = {
    showForm: false,
    toggleForm: mockToggleForm,
  };

  it('renders 1 buttons', () => {
    const { getByTestId } = render(<ToolBar {...defaultProps} />);
    const container = getByTestId('tool-bar');
    const buttons = container.getElementsByClassName('btnPrimary');
    expect(buttons.length).toBe(1);
  });
});
