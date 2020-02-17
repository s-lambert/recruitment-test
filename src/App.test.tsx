jest.mock('./item-api');
jest.useFakeTimers();

import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';

const itemApi = require('./item-api');
const fetchItemsMock = (itemApi.fetchItems = jest.fn());

test('displays a loading message while fetching data', () => {
  fetchItemsMock.mockResolvedValueOnce([]);
  const { getByText } = render(<App />);
  const loadingMessage = getByText(/loading/i);
  expect(loadingMessage).toBeInTheDocument();
});

test('displays a list of items from an API', async () => {
  fetchItemsMock.mockResolvedValueOnce([]);
  const { getByRole } = render(<App />);
  act(() => {
    jest.runAllTimers();
  });
  const list = await waitForElement(() => getByRole('list'));
  expect(list).toBeInTheDocument();
});
