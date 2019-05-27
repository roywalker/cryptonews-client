import React from 'react';

const AddNews = () => {
  return (
    <form>
      <label htmlFor='title'>Title</label>
      <input type='text' name='title' id='title' />
      <label htmlFor='url'>Url</label>
      <input type='text' name='url' id='url' />
      <input type='submit' value='Add' />
    </form>
  );
};

export default AddNews;
