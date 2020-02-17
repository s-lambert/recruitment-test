import React from 'react';
import { Item } from './item-api';

interface ItemListProps {
  items: Item[];
}

function ItemList({ items }: ItemListProps) {
  return <ul></ul>;
}

export default ItemList;
