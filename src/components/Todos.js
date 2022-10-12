import React from 'react';

const Posts = ({ posts }) => {
  return (
    <>
      {
        posts == null ?
        <tr>
        <td>Loading </td>
        </tr> :
        posts.map((post,index) => (
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
