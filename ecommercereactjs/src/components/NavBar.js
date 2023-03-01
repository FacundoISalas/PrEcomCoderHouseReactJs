import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>MangaStore</Link>
        </Typography>
        <ItemListContainer/>
        <CartWidget/>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;