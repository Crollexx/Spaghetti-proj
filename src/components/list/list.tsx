import React from 'react';
import styles from './styles.module.scss'
import ListNotification, {IListNotificationProps} from "../listNotification/listNotification";
import ListFilters, {IListFiltersProps} from "../listFilters/listFilters";
import ListItem from "../listItem/listItem";
import {IOrder} from "../../types/order";

interface IDefaultListBaseProps {
  data: IOrder[]
}

interface IWithFilters extends IDefaultListBaseProps, IListFiltersProps{}

interface IDefaultListWithNotification extends IDefaultListBaseProps, IListNotificationProps{}

type DefaultListPropsType = IWithFilters | IDefaultListWithNotification

// @ts-ignore
const DefaultList: React.FC<DefaultListPropsType> = ({ data, notificationText, onSelectFilter, onClearFilter }) => {

  const showNotification = !!notificationText
  const showFilters = !!onClearFilter && !!onSelectFilter

  const preparedListClassName = `${styles.list} ${(data?.length > 3) ? styles.scroll : ''}`

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        {showNotification ? (
          <ListNotification notificationText={notificationText}/>
        ) : null}
        {showFilters ? (
          <ListFilters onClearFilter={onClearFilter} onSelectFilter={onSelectFilter}/>
        ) : null}
      </div>
      <div className={preparedListClassName}>
        {data?.map((item) => (
          <ListItem orderID={item.id} key={item.id} {...item}/>
        ))}
      </div>

    </div>
  );
};

export default DefaultList;