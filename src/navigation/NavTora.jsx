import React, { useState } from 'react';
import './Links.scss';
import { Button, Menu, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavTora = () => {
  const [anchorElm, setAnchorElm] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setAnchorElm(null);
    setOpen(false);
  };

  const handleClick = (e) => {
    setAnchorElm(e.currentTarget);
    setOpen(true);
  };

  return (
    <div className="btn__nav">
      <Button
        variant="contained"
        onClick={handleClick}
        className="btn__nav-bock"
      >
        Toрa
      </Button>
      <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose} className="nav__menu-item">
          <NavLink to="/tora" className="nav__item">
            Берешит
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/tora/schmot" className="nav__item">
            Шмот
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/tora/vaikra" className="nav__item">
            Ваикра
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/tora/bemitbar" className="nav__item">
            Бемитбар
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/tora/dvarim" className="nav__item">
            Дварим
          </NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NavTora;
