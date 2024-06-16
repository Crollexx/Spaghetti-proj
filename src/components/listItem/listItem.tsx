import React from 'react';
import styles from './styles.module.scss'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import {IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";

interface IListItemProps {
  title: string
  href?: string
  status?: string
  statusColor?: string
  statusText?: string
}
const ListItem: React.FC<IListItemProps> = ({ title, href }) => {
  
  const navigate = useNavigate();
  
  const handleClick = (link: string) => {
    navigate(link)
  }
  
  return (
    <div className={styles.wrapper}>
      <span>
        {title}
      </span>
      <div>
        {!!href ? (
          <IconButton
            aria-haspopup="true"
            onClick={() => handleClick(href)}
          >
            <ArrowForwardIosOutlinedIcon/>
          </IconButton>
        ) : null}
      </div>

    </div>
  );
};

export default ListItem;