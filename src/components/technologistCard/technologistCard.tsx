import React from 'react';
import styles from './styles.module.scss'
import DefaultList from "../list/list";
import {IListItem} from "../listItem/listItem";
interface ITechnologistCardProps {
data: IListItem[]
}
const TechnologistCard: React.FC<ITechnologistCardProps> = ({ data }) => {
  
  const preparedData = data.map((item) => ({...item, badge: null}))
  return (
    <div className={styles.wrapper}>
      <DefaultList
        data={data}
      />
    </div>
  );
};

export default TechnologistCard;