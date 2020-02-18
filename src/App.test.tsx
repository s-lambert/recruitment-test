jest.mock('./ItemList/item-api');

import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import App from './App';

const itemApi = require('./ItemList/item-api');
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
  fetchItemsMock.mockResolvedValueOnce([createItem('post', '', '')]);
  const { getByText, queryByText } = render(<App />);
  const deleteButton = await waitForElement(() => getByText(/delete/i));
  deleteButton.click();
  const deletedItem = queryByText(/post/i);
  expect(deletedItem).toBeNull();
});

test('updates the post title of an item', async () => {
  fetchItemsMock.mockResolvedValueOnce([createItem('original title', '', '')]);
  const { getByText, getByRole } = render(<App />);

  const editButton = await waitForElement(() => getByText(/edit/i));
  editButton.click();
  const newTitleInput = getByRole('textbox');
  fireEvent.change(newTitleInput, { target: { value: 'new title' } });
  const saveButton = getByText(/save/i);
  saveButton.click();

  const updatedTitle = getByText(/new title/i);
  expect(updatedTitle).toBeInTheDocument();
});

function createItem(postTitle: string, albumTitle: string, username: string) {
  return {
    post: { title: postTitle },
    album: { title: albumTitle },
    user: { username }
  };
}
