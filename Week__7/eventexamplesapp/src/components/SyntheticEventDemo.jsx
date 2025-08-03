import React from 'react';

function SyntheticEventDemo() {
  const handleClick = (e) => {
    alert("I was clicked");
  };

  return (
    <button onClick={handleClick}>Click On Me</button>
  );
}

export default SyntheticEventDemo;
