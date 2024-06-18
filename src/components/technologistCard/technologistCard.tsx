import React, {useState} from 'react';
import styles from './styles.module.scss'
import DefaultList from "../list/list";
import {IQuestionnairesData} from "../../types/form";
import {routes} from "../../routes/routes";
import {Checkbox} from "@mui/material";
interface ITechnologistCardProps {
  filters: {
    orderID: number
    height:	[number, number]
    weight:	[number, number]
  }
  data: IQuestionnairesData[]
  onSubmit: ( value: number[]) => void
}
const TechnologistCard: React.FC<ITechnologistCardProps> = ({ data, filters, onSubmit }) => {
  
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  
  const handleSubmit = (selectedItems: number[]) => {
    onSubmit(selectedItems)
    setSelectedItems([])
  }
  const handleClick = (itemID: number) => {
    setSelectedItems(prevState =>
      prevState.includes(itemID)
        ? prevState.filter((item) => item !== itemID)
        : [...prevState, itemID]
    )
  }
  
  const preparedData = data.map(({ id, }) => ({
    itemID: id,
    link: routes.technologist.questionnaire(id),
    badge: (
      <Checkbox
        value={selectedItems.includes(id)}
        className={styles.select}
        onClick={() => handleClick(id)}
      />
    ),
    
  }))
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.card}>
          <span className={styles['card-title']}>
            №{filters.orderID}
          </span>
          <div className={styles['card-list']}>
            <span className={styles['card-item']}>
              Пол: мужской
            </span>
            <span className={styles['card-item']}>
              Рост: {filters.height[0] + '-' + filters.height[1]}
            </span>
            <span className={styles['card-item']}>
              Вес: {filters.weight[0] + '-' + filters.weight[1]}
            </span>
          </div>
        </div>
        <DefaultList
          className={styles.list}
          data={preparedData}
          onItemClick={() => {}}
        />
      </div>
      <button className={styles.btn} onClick={() => handleSubmit(selectedItems)}>
        Сохранить
      </button>
    </div>
  );
};

export default TechnologistCard;