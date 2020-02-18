import React, { useEffect, useState } from 'react';
import './App.css';
import ItemList from './ItemList/ItemList';
import { Item, fetchItems } from './ItemList/item-api';

const NUMBER_OF_ITEMS = 30;

function App() {
  const [items, updateItems] = useState<Item[]>();

  useEffect(() => {
    fetchItems(NUMBER_OF_ITEMS).then(newItems => updateItems(newItems));
  }, []);

  function deleteItem(item: Item) {
    if (items == undefined) return;

    const newItems = items.slice(0);
    const deletedIndex = items.indexOf(item);
    newItems.splice(deletedIndex, 1);
    updateItems(newItems);
  }

  function updateTitle(item: Item, newTitle: string) {
    if (items == undefined) return;

    const updatedItem = {
      ...item,
      post: {
        ...item.post,
        title: newTitle
      }
    };
    const updatedItems = items.slice(0);
    const updatedIndex = items.indexOf(item);
    updatedItems[updatedIndex] = updatedItem;
    updateItems(updatedItems);
  }

  return items == undefined ? (
    <div>Loading...</div>
  ) : (
    <ItemList items={items} onDelete={deleteItem} updateTitle={updateTitle} />
  );
}

export default App;
