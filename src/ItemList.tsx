import React from 'react';
import { Item } from './item-api';

interface ItemListProps {
  items: Item[];
  onDelete: (item: Item) => void;
}

function ItemList({ items, onDelete }: ItemListProps) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <p>Post title: {item.post.title}</p>
          <p>Album title: {item.album.title}</p>
          <p>Username: {item.user.username}</p>
          <button onClick={() => onDelete(item)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
