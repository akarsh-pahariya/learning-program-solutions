import React from 'react';

const blogs = [
  {
    title: 'React Learning',
    author: 'Stephen Biz',
    content: 'Welcome to learning React!'
  },
  {
    title: 'Installation',
    author: 'Schwezdenier',
    content: 'You can install React from npm.'
  }
];

const BlogDetails = () => {
  return (
    <div style={{ padding: '0 20px' }}>
      <h2>Blog Details</h2>
      {blogs.map((blog, idx) => (
        <div key={idx} style={{ marginBottom: '1rem' }}>
          <strong>{blog.title}</strong>
          <p>{blog.author}</p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
