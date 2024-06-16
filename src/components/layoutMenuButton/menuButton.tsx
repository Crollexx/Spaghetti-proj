import React, {useState} from 'react';
import {IconButton, Menu, MenuItem} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface IMenuButtonProps {

}
const MenuButton: React.FC<IMenuButtonProps> = () => {
  
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget)
  }
  
  const handleClose = () => {
    setAnchorEl(null)
  }
  
  return (
    <>
      <IconButton
        id="basic-menu"
        aria-label="menu"
        aria-controls={!!anchorEl ? 'long-menu' : undefined}
        aria-expanded={!!anchorEl ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleOpen}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Анкеты</MenuItem>
        <MenuItem onClick={handleClose}>Заказы</MenuItem>
      </Menu>
    </>
  );
};

export default MenuButton;