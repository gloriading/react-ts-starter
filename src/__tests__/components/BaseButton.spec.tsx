import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import BaseButton, { ButtonProps } from '../../app/components/utils/BaseButton';

describe('<BaseButton />', () => {
  afterEach(cleanup);

  const buttonText = 'Test Button';
  const buttonEvent = jest.fn();

  const defaultProps: ButtonProps = {
    type: 'btnOutlined',
    display: buttonText,
    event: buttonEvent,
  };

  test('button renders with correct text', () => {
    const { queryByText, rerender } = render(<BaseButton {...defaultProps} />);
    expect(queryByText(buttonText)).toBeTruthy();

    // Change props
    const newButtonText = 'Test Button New';
    rerender(<BaseButton {...defaultProps} display={newButtonText} />);
    expect(queryByText(newButtonText)).toBeTruthy();
  });

  test('event is called with button click', () => {
    const { getByTestId } = render(<BaseButton {...defaultProps} />);
    fireEvent.click(getByTestId('base-button'));
    expect(buttonEvent).toHaveBeenCalled();
  });
});
