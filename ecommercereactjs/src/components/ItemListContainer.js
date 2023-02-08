import React from 'react';

const ItemListContainer = (props) => {
  return (
    <div>
      <h1>Hola, {props.greeting}!</h1>
      <p>Bienvenido a la tienda.</p>
    </div>
  );
};

export default ItemListContainer;