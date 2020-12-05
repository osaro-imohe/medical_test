/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders App', () => {
  render(<App />);
  const header = screen.getByText(/🏥/);
  expect(header).toBeInTheDocument();
});
