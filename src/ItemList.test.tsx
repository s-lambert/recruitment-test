import React from 'react';
import { render } from '@testing-library/react';
import ItemList from './ItemList';

test('renders no items for an empty list of items', () => {
  const { getByRole, queryAllByRole } = render(<ItemList items={[]} />);
  const list = getByRole('list');
  const listItem = queryAllByRole('listitem');
  expect(list).toBeInTheDocument();
  expect(listItem.length).toBe(0);
});

test('renders a list item for each item in the list', () => {
  const items = [
    createItem('mock post 1', 'mock album A', 'user1'),
    createItem('mock post 2', 'mock album B', 'user1')
  ];
  const { queryAllByRole } = render(<ItemList items={items} />);
  const renderedItems = queryAllByRole('listitem');
  expect(renderedItems.length).toBe(items.length);
});

test('renders the post title with each item', () => {
  const items = [
    createItem('first post', '', ''),
    createItem('second post', '', '')
  ];
  const { getByText } = render(<ItemList items={items} />);
  const firstPost = getByText(/first post/i);
  const secondPost = getByText(/second post/i);
  expect(firstPost).toBeInTheDocument();
  expect(secondPost).toBeInTheDocument();
});

test('renders the album title with each item', () => {
  const items = [
    createItem('', 'first album', ''),
    createItem('', 'second album', '')
  ];
  const { getByText } = render(<ItemList items={items} />);
  const firstAlbum = getByText(/first album/i);
  const secondAlbum = getByText(/second album/i);
  expect(firstAlbum).toBeInTheDocument();
  expect(secondAlbum).toBeInTheDocument();
});

test('renders the username with each item', () => {
  const items = [
    createItem('', '', 'a user'),
    createItem('', '', 'another user')
  ];
  const { getByText } = render(<ItemList items={items} />);
  const firstUser = getByText(/a user/i);
  const secondUser = getByText(/another user/i);
  expect(firstUser).toBeInTheDocument();
  expect(secondUser).toBeInTheDocument();
});

function createItem(postTitle: string, albumTitle: string, username: string) {
  return {
    post: { title: postTitle },
    album: { title: albumTitle },
    user: { username }
  };
}
