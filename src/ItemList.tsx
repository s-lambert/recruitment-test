import React from 'react';
import { Item } from './item-api';

interface ItemListProps {
  items: Item[];
}

function ItemList({ items }: ItemListProps) {
  return (
    <ul>
      {items.map((_, index) => (
        <li key={index}></li>
      ))}
    </ul>
  );
}

export default ItemList;
