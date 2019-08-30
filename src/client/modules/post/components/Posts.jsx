import React from 'react';
import { NavLink } from 'react-router-dom';

const Posts = () => {
  return (
    <div style={{ padding: 50 }}>
      <p>MAIN -> POSTS Route</p>
      <NavLink to="/post">Go to post</NavLink>
    </div>
  );
};

export default Posts;