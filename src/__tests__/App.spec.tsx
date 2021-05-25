import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '../app/App';

describe('<App />', () => {
  test('renders App component', () => {
    render(<App />);

    const text = screen.getByText('Hello Vite + React!');
    expect(text).toBeInTheDocument();
  });
});
