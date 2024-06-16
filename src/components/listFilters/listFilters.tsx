import React from 'react';
import styles from './styles.module.scss'
import {Button} from "@mui/material";

export interface IListFiltersProps {
  showFilters: boolean
  onSelectFilter: () => void
  onClearFilter: () => void
}
const ListFilters: React.FC<IListFiltersProps> = ({ showFilters, onSelectFilter, onClearFilter }) => {
  if (!showFilters) return null
  
  return (
    <div className={styles.wrapper}>
      <Button onClick={() => onClearFilter()}>
        Все
      </Button>
      <Button onClick={() => onSelectFilter()}>
        Не просмотренные
      </Button>
    </div>
  );
};

export default ListFilters;