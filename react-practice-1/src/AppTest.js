// import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './AppU3';

test('renders US universities header', () => {
  render(<App />);
  const headerElement = screen.getByText(/US universities/i);
  expect(headerElement).toBeInTheDocument();
});

