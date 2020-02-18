jest.mock('./item-api');

import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import App from './App';

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
  const list = await waitForElement(() => getByRole('list'));
  expect(list).toBeInTheDocument();
});

test('deletes an item from the list of items', async () => {
  fetchItemsMock.mockResolvedValueOnce([
    createItem('post to be deleted', '', '')
  ]);
  const { getByRole, queryByText } = render(<App />);
  const deleteButton = await waitForElement(() => getByRole('button'));
  deleteButton.click();
  const deletedItem = queryByText(/post to be deleted/i);
  expect(deletedItem).toBeNull();
});

function createItem(postTitle: string, albumTitle: string, username: string) {
  return {
    post: { title: postTitle },
    album: { title: albumTitle },
    user: { username }
  };
}
