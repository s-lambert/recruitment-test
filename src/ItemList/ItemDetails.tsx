import React, { useState } from 'react';
import './ItemDetails.css';
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

  function saveOnEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      saveNewTitle();
    }
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
    <div className='item-details'>
      <div className='item-details-post'>
        {isEditing ? (
          <>
            <b>Post title</b>
            <div className='item-details-post-title'>
              <input
                type='text'
                value={newTitle}
                onChange={updateNewTitle}
                onKeyPress={saveOnEnter}
              />
            </div>
            <div className='edit-buttons'>
              <button onClick={saveNewTitle}>Save</button>
              <button onClick={cancelEditing}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            <b>Post title</b>
            <div className='item-details-post-title'>{item.post.title}</div>
            <div className='edit-buttons'>
              <button onClick={startEditing}>Edit</button>
            </div>
          </>
        )}
      </div>
      <div className='item-details-other'>
        <div className='item-details-album'>
          <b>Album title</b> {item.album.title}
        </div>
        <div className='item-details-user'>
          <b>Username</b> {item.user.username}
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
