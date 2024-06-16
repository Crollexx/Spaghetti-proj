import React, {useState} from 'react';
import {IconButton, Menu, MenuItem} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export interface IListData {
  title: string | React.ReactNode
  value: string | number
}

interface IMenuButtonProps {
  id: string,
  children: React.ReactNode,
  listData: IListData[],
  onClick: (value: string | number) => void
}

const MenuButton: React.FC<IMenuButtonProps> = ({ id, children, listData, onClick }) => {
  
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget)
  }
  
  const handleClose = (value: string | number) => {
    setAnchorEl(null)
    onClick(value)
  }
  
  return (
    <>
      <IconButton
        id={id}
        aria-label="menu"
        aria-controls={!!anchorEl ? 'long-menu' : undefined}
        aria-expanded={!!anchorEl ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleOpen}
      >
        {children}
        <MenuIcon />
      </IconButton>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
      >
        {listData?.map(({ title,value }) => (
          <MenuItem onClick={() => handleClose(value)}>
            {title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuButton;