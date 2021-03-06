import React from 'react';
import { render } from '@testing-library/react';
import ItemList from './ItemList';

const noop = () => {};

test('renders no items for an empty list of items', () => {
  const { getByRole, queryAllByRole } = render(
    <ItemList items={[]} onDelete={noop} />
  );
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
  const { queryAllByRole } = render(<ItemList items={items} onDelete={noop} />);
  const renderedItems = queryAllByRole('listitem');
  expect(renderedItems.length).toBe(items.length);
});

test('allows an item to be deleted', () => {
  const onDeleteMock = jest.fn();
  const items = [createItem('item', '', '')];
  const { getByText } = render(
    <ItemList items={items} onDelete={onDeleteMock} />
  );
  const deleteButton = getByText(/delete/i);
  deleteButton.click();
  expect(onDeleteMock).toBeCalledWith(items[0]);
});

function createItem(postTitle: string, albumTitle: string, username: string) {
  return {
    post: { title: postTitle },
    album: { title: albumTitle },
    user: { username }
  };
}
