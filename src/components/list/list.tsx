import React from 'react';
import styles from './styles.module.scss'
import ListNotification from "../listNotification/listNotification";
import ListFilters from "../listFilters/listFilters";
import ListItem, {IListItem} from "../listItem/listItem";

interface IDefaultListBaseProps {
  data: IListItem[]
  onSelectFilter?: () => void
  onClearFilter?: () => void
  onItemClick?: (itemID: number) => void
  notificationText?: string
  className?: string
}
const DefaultList: React.FC<IDefaultListBaseProps> = ({
                                                        data,
                                                        notificationText,
                                                        onItemClick,
                                                        onSelectFilter,
                                                        className = '',
                                                        onClearFilter,
                                                      }) => {

  const showNotification = !!notificationText
  const showFilters = !!onClearFilter && !!onSelectFilter

  const preparedListClassName = `${styles.list} ${(data?.length > 3) ? styles.scroll : ''} ${className }`

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
            onClick={onItemClick}
          />
        ))}
      </div>

    </div>
  );
};

export default DefaultList;