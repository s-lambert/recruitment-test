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
