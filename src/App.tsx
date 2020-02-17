import React, { useEffect, useState } from 'react';
import './App.css';
import ItemList from './ItemList';
import { Item, fetchItems } from './item-api';

const NUMBER_OF_ITEMS = 30;

function App() {
  const [items, updateItems] = useState<Item[]>();
  useEffect(() => {
    fetchItems(NUMBER_OF_ITEMS).then(newItems => updateItems(newItems));
  }, []);

  return items == undefined ? (
    <div>Loading...</div>
  ) : (
    <ItemList items={items} />
  );
}

export default App;
