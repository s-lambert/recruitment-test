import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ItemDetails from './ItemDetails';

const noop = () => {};

test('renders the post title for an item', () => {
  const item = createItem('a post', '', '');
  const { getByText } = render(<ItemDetails item={item} updateTitle={noop} />);
  const postTitle = getByText(/a post/i);
  expect(postTitle).toBeInTheDocument();
});

test('renders the album title for an item', () => {
  const item = createItem('', 'album title', '');
  const { getByText } = render(<ItemDetails item={item} updateTitle={noop} />);
  const albumTitle = getByText(/album title/i);
  expect(albumTitle).toBeInTheDocument();
});

test('renders the username for an item', () => {
  const item = createItem('', '', 'my user');
  const { getByText } = render(<ItemDetails item={item} updateTitle={noop} />);
  const username = getByText(/my user/i);
  expect(username).toBeInTheDocument();
});

test('updates the post title with a new title input', () => {
  const newTitle = 'new title';
  const updateTitleFn = jest.fn();
  const item = createItem('original title', '', '');
  const { getByText, getByRole } = render(
    <ItemDetails item={item} updateTitle={updateTitleFn} />
  );

  const editButton = getByText(/edit/i);
  editButton.click();
  const newTitleInput = getByRole('textbox');
  fireEvent.change(newTitleInput, { target: { value: newTitle } });
  const saveButton = getByText(/save/i);
  saveButton.click();

  expect(updateTitleFn).toBeCalledWith(newTitle);
});

it('cancels editing the title, reverting back to the original title', () => {
  const updateTitleFn = jest.fn();
  const item = createItem('original title', '', '');
  const { getByText, getByRole } = render(
    <ItemDetails item={item} updateTitle={updateTitleFn} />
  );

  const editButton = getByText(/edit/i);
  editButton.click();
  const newTitleInput = getByRole('textbox');
  fireEvent.change(newTitleInput, { target: { value: 'new title' } });
  const cancelButton = getByText(/cancel/i);
  cancelButton.click();
  const title = getByText(/original title/i);

  expect(updateTitleFn).not.toBeCalled();
  expect(title).toBeInTheDocument();
});

function createItem(postTitle: string, albumTitle: string, username: string) {
  return {
    post: { title: postTitle },
    album: { title: albumTitle },
    user: { username }
  };
}
