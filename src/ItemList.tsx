import React from 'react';
import { Item } from './item-api';

interface ItemListProps {
  items: Item[];
}

function ItemList({ items }: ItemListProps) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <p>Post title: {item.post.title}</p>
          <p>Album title: {item.album.title}</p>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
