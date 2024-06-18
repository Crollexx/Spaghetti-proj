import React from 'react';
import styles from './styles.module.scss'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import {IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useUserData} from "../../hooks/useUserData";

export interface IListItem {
  itemID: string
  link?: string
  badge?: React.ReactNode
}

interface IListItemProps extends IListItem {}
const ListItem: React.FC<IListItemProps> = ({
                                              itemID,
                                              link,
                                              badge
                                            }) => {

  const {userRole} = useUserData()
  const navigate = useNavigate();
  
  const showLinkButton = link !== undefined
  
  // const status = orderStatuses.cooking
  
  // const showDeliveryNotification =
  //   userRole === usersRoles.client && feedbackNotification
  // const showStatusNotification =
  //   userRole === usersRoles.client ||
  //   userRole === usersRoles.clientRepresentative ||
  //   userRole === usersRoles.agent
  // const showLinkButton =
  //   userRole === usersRoles.brigadier ||
  //   userRole === usersRoles.client ||
  //   userRole === usersRoles.agent ||
  //   (
  //     userRole === usersRoles.clientRepresentative && !feedbackNotification
  //   )
  
  const handleClick = () => {
    showLinkButton && navigate(link)
  }
  
  return (
    <div
      className={styles.wrapper + ' ' + (showLinkButton ? styles.link : '')}
      onClick={() => handleClick()}
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