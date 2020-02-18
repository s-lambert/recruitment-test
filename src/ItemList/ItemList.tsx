import React from 'react';
import './ItemList.css';
import { Item } from './item-api';
import ItemDetails from './ItemDetails';

interface ItemListProps {
  items: Item[];
  onDelete: (item: Item) => void;
  updateTitle: (item: Item, newTitle: string) => void;
}

function ItemList({ items, onDelete, updateTitle }: ItemListProps) {
  return (
    <ul className='item-list'>
      {items.map((item, index) => (
        <li key={index} className='item'>
          <div className='item-details-container'>
            <ItemDetails
              item={item}
              updateTitle={newTitle => updateTitle(item, newTitle)}
            />
          </div>
          <div className='item-delete-button-cntainer'>
            <button onClick={() => onDelete(item)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
