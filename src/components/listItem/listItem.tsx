import React from 'react';
import styles from './styles.module.scss'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import {IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";

export interface IListItem {
  itemID: number
  link?: string
  badge?: React.ReactNode
  onClick?: (itemID: number) => void
}

interface IListItemProps extends IListItem {}
const ListItem: React.FC<IListItemProps> = ({
                                              itemID,
                                              link,
                                              badge, onClick,
                                            }) => {

  const navigate = useNavigate();
  
  const showLinkButton = link !== undefined
  
  const handleClick = () => {
    showLinkButton && navigate(link)
  }
  
  return (
    <div
      className={styles.wrapper + ' ' + (showLinkButton ? styles.link : '')}
      onClick={() => onClick ? onClick(itemID) : handleClick()}
      key={itemID}
    >
      <span>
        №{itemID}
      </span>
      <div className={styles.icons}>
        {badge}
        {showLinkButton ? (
          <IconButton
            aria-haspopup="true"
            onClick={() => handleClick()}
          >
            <ArrowForwardIosOutlinedIcon/>
          </IconButton>
        ) : null}
      </div>

    </div>
  );
};

export default ListItem;