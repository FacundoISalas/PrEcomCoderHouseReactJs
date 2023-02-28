import React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <IconButton
    size="large"
    edge="start"
    color="inherit"
    aria-label="cart"
    >
    <div className="d-flex justify-content-center">
        <ShoppingCartIcon /> : 1
    </div>
    </IconButton>
  );
};

export default CartWidget;