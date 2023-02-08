import React from 'react';

const NavBar = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is a basic example of a React component.</p>
    </div>
  );
};

export default NavBar;