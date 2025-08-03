import React from 'react';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';

function App() {
  const columnStyle = {
    borderLeft: '4px solid green',
    paddingLeft: '20px',
    marginLeft: '20px'
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>React App</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          padding: '20px'
        }}
      >
        <div>
          <CourseDetails />
        </div>
        <div style={columnStyle}>
          <BookDetails />
        </div>
        <div style={columnStyle}>
          <BlogDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
