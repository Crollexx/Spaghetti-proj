import React from 'react';
import styles from './styles.module.scss'
import ListNotification, {IListNotificationProps} from "../listNotification/listNotification";
import ListFilters, {IListFiltersProps} from "../listFilters/listFilters";
import ListItem, {IListItem} from "../listItem/listItem";

interface IDefaultListBaseProps {
  data: IListItem[]
  onSelectFilter?: () => void
  onClearFilter?: () => void
  notificationText?: string
}
const DefaultList: React.FC<IDefaultListBaseProps> = ({ data, notificationText, onSelectFilter, onClearFilter }) => {

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
        {data?.map(({ itemID, link, badge}) => (
          <ListItem
            key={itemID ?? link}
            itemID={itemID}
            link={link}
            badge={badge}
          />
        ))}
      </div>

    </div>
  );
};

export default DefaultList;