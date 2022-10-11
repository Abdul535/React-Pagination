import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {posts.map((post,index) => (
        <tr key={index} >
          <td>{post.id}</td>
          <td>{post.userId}</td>
          <td>{post.title}</td>
          <td>{post.completed ? "true": "false"}</td>
        </tr>
      ))
      }
    </>
  );
};

export default Posts;
