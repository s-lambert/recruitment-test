import React from 'react';
import { Item } from './item-api';

interface ItemDetailsProps {
  item: Item;
}

function ItemDetails({ item }: ItemDetailsProps) {
  return (
    <div>
      <p>Post title: {item.post.title}</p>
      <p>Album title: {item.album.title}</p>
      <p>Username: {item.user.username}</p>
    </div>
  );
}

export default ItemDetails;
