import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const categories = {
  "categories": [
    {
      "id": 1,
      "name": "Mangas",
      "route": "/category/01",
    },
    {
      "id": 2,
      "name": "Comics",
      "route": "/category/01",
    },
  ]
};

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: 'white' }}
      >
        Catalogos
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {categories.categories.map(category => {
          return (
            <MenuItem component={Link} key={category.id} onClick={handleClose} to={`/category/${category.id}`}> {category.name} </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}