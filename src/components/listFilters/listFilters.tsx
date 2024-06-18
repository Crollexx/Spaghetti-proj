import React from 'react';
import styles from './styles.module.scss'

export interface IListFiltersProps {
  onSelectFilter: () => void
  onClearFilter: () => void
}
const ListFilters: React.FC<IListFiltersProps> = ({ onSelectFilter, onClearFilter }) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={() => onClearFilter()} className={styles.button} key={'all'}>
        Все
      </button>
      <button onClick={() => onSelectFilter()} className={styles.button} key={'unread'}>
        Не просмотренные
      </button>
    </div>
  );
};

export default ListFilters;