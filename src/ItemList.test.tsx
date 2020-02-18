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

function createItem(postTitle: string, albumTitle: string, username: string) {
  return {
    post: { title: postTitle },
    album: { title: albumTitle },
    user: { username }
  };
}
