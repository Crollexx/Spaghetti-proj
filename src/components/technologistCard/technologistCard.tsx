import React, {useState} from 'react';
import styles from './styles.module.scss'
import DefaultList from "../list/list";
import {IFormData} from "../../types/form";
import {routes} from "../../routes/routes";
import {Checkbox} from "@mui/material";
interface ITechnologistCardProps {
  filters: {
    orderID: number
    height:	[number, number]
    weight:	[number, number]
  }
  data: IFormData[]
  onSubmit: ( value: string[]) => void
}
const TechnologistCard: React.FC<ITechnologistCardProps> = ({ data, filters, onSubmit }) => {
  
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  
  const handleSubmit = (selectedItems: string[]) => {
    onSubmit(selectedItems)
    setSelectedItems([])
  }
  const handleClick = (itemID: string) => {
    console.log(itemID)
    setSelectedItems(prevState =>
      prevState.includes(itemID)
        ? prevState.filter((item) => item !== itemID)
        : [...prevState, itemID]
    )
  }
  
  const preparedData = data.map(({ id, }) => ({
    itemID: String(id),
    link: routes.technologist.questionnaire(id),
    badge: (
      <Checkbox
        value={selectedItems.includes(String(id))}
        className={styles.select}
        onClick={() => handleClick(String(id))}
      />
    ),
    
  }))
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.card}>
          <span className={styles['card-title']}>
            {filters.orderID}
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