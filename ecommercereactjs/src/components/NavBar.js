import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CartWidget from '../components/CartWidget';
import ItemListContainer  from '../components/ItemListContainer';


const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MangaStore
        </Typography>
        <ItemListContainer/>
        <CartWidget/>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;