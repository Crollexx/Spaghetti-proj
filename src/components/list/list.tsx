import React from 'react';
import styles from './styles.module.scss'
import ListNotification, {IListNotificationProps} from "../listNotification/listNotification";
import ListFilters, {IListFiltersProps} from "../listFilters/listFilters";
import ListItem from "../listItem/listItem";

interface IDefaultDataItem {
  id: number
  title: string
}
interface IDefaultListBaseProps<T> {
  data: (IDefaultDataItem & T)[]
}
interface IWithFilters<T> extends IDefaultListBaseProps<T>, IListFiltersProps{
  showFilters: boolean
  onSelectFilter: () => void
  onClearFilter: () => void
}

interface IDefaultListWithNotification<T> extends IDefaultListBaseProps<T>, IListNotificationProps{
  showNotification: boolean
  orderID: number
}


// @ts-ignore
const DefaultList = <T,>({ data, showFilters, showNotification, orderID, onSelectFilter, onClearFilter }: (IDefaultListBaseProps<T> | IWithFilters<T> | IDefaultListWithNotification<T>)) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <ListNotification showNotification={showNotification} orderID={orderID}/>
        <ListFilters showFilters={showFilters} onClearFilter={onClearFilter} onSelectFilter={onSelectFilter}/>
      </div>
      <div className={styles.list}>
        {data?.map(({ title, id }) => (
          <ListItem title={title} href={String(id)}/>
        ))}
      </div>

    </div>
  );
};

export default DefaultList;