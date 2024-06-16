import React from 'react';
import styles from './styles.module.scss'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import {IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {IOrder} from "../../types/order";
import {useUserData} from "../../hooks/useUserData";
import {usersRoles} from "../../types/roles";
import ListStatusBadge from "../listStatusBadge/listStatusBadge";

interface IListItemProps extends IOrder {
  orderID: number
  showLinkButton?: boolean
  showStatusIndicator?: boolean
}
const ListItem: React.FC<IListItemProps> = ({
                                              orderID,
                                              showStatusIndicator,
                                              feedbackNotification,
                                              deliveryNotification,
                                              status
                                            }) => {

  const {userRole} = useUserData()
  const navigate = useNavigate();

  const showStatusNotification = false
  const showDeliveryNotification = userRole === usersRoles.client && feedbackNotification
  const showLinkButton =
    userRole === usersRoles.brigadier ||
    userRole === usersRoles.client ||
    userRole === usersRoles.agent ||
    (
      userRole === usersRoles.clientRepresentative && !feedbackNotification
    )
  
  const handleClick = (link: number) => {
    navigate(`/${link}`)
  }
  
  return (
    <div className={styles.wrapper}>
      <span>
        №{orderID}
      </span>
      <div>
        {showDeliveryNotification ? (
          <>
            </>
        ) : null}
        {showStatusNotification ? (
          <ListStatusBadge status={status} />
        ) : null}
        {showLinkButton ? (
          <IconButton
            aria-haspopup="true"
            onClick={() => handleClick(orderID)}
          >
            <ArrowForwardIosOutlinedIcon/>
          </IconButton>
        ) : null}
      </div>

    </div>
  );
};

export default ListItem;