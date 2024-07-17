import React, { useState } from 'react';
import axios from '../api';

const PostForm = ({ setPosts }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/posts', { title, content })
      .then(res => setPosts(posts => [...posts, res.data]))
      .catch(err => console.error(err));
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Create</button>
    </form>
  );
};

export default PostForm;
