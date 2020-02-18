import React, { useState } from 'react';
import { Item } from './item-api';

interface ItemDetailsProps {
  item: Item;
  updateTitle: (newTitle: string) => void;
}

function ItemDetails({ item, updateTitle }: ItemDetailsProps) {
  const [isEditing, changeEditStatus] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  function startEditing() {
    // Edit new title in place instead of from scratch
    setNewTitle(item.post.title);
    changeEditStatus(true);
  }

  function updateNewTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTitle(e.target.value);
  }

  function saveNewTitle() {
    updateTitle(newTitle);
    cancelEditing();
  }

  function cancelEditing() {
    // Clear out temporary new title just in case
    setNewTitle('');
    changeEditStatus(false);
  }

  return (
    <div>
      {isEditing ? (
        <p>
          New post title:{' '}
          <input type='text' value={newTitle} onChange={updateNewTitle} />
          <button onClick={saveNewTitle}>Save</button>
          <button onClick={cancelEditing}>Cancel</button>
        </p>
      ) : (
        <p>
          Post title: {item.post.title}{' '}
          <button onClick={startEditing}>Edit</button>
        </p>
      )}
      <p>Album title: {item.album.title}</p>
      <p>Username: {item.user.username}</p>
    </div>
  );
}

export default ItemDetails;
