import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mt-4">Simple Blog</h1>
      <PostForm setPosts={setPosts} />
      <PostList />
    </div>
  );
}

export default App;
