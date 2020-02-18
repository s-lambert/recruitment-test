import React from 'react';
import { Item } from './item-api';
import ItemDetails from './ItemDetails';

interface ItemListProps {
  items: Item[];
  onDelete: (item: Item) => void;
}

function ItemList({ items, onDelete }: ItemListProps) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <ItemDetails item={item} updateTitle={() => {}} />
          <button onClick={() => onDelete(item)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
