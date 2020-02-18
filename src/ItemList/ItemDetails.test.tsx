import React from 'react';
import { render } from '@testing-library/react';
import ItemDetails from './ItemDetails';

test('renders the post title for an item', () => {
  const item = createItem('a post', '', '');
  const { getByText } = render(<ItemDetails item={item} />);
  const postTitle = getByText(/a post/i);
  expect(postTitle).toBeInTheDocument();
});

test('renders the album title for an item', () => {
  const item = createItem('', 'album title', '');
  const { getByText } = render(<ItemDetails item={item} />);
  const albumTitle = getByText(/album title/i);
  expect(albumTitle).toBeInTheDocument();
});

test('renders the username for an item', () => {
  const item = createItem('', '', 'my user');
  const { getByText } = render(<ItemDetails item={item} />);
  const username = getByText(/my user/i);
  expect(username).toBeInTheDocument();
});

function createItem(postTitle: string, albumTitle: string, username: string) {
  return {
    post: { title: postTitle },
    album: { title: albumTitle },
    user: { username }
  };
}
