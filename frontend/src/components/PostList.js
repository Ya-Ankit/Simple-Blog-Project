import React, { useEffect, useState } from 'react';
import axios from '../api';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/posts/${id}`)
      .then(() => setPosts(posts.filter(post => post._id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div className="p-4">
      {posts.map(post => (
        <div key={post._id} className="bg-white shadow-md rounded p-4 mb-4">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.content}</p>
          <button className="bg-red-500 text-white px-4 py-2 mt-2" onClick={() => handleDelete(post._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
