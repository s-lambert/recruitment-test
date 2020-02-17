import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('displays a loading message while fetching data', () => {
  const { getByText } = render(<App />);
  const loadingMessage = getByText(/loading/i);
  expect(loadingMessage).toBeInTheDocument();
});
