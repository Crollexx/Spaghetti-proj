import React, {useState} from 'react';
import styles from './styles.module.scss';
import {useNavigate} from "react-router-dom";

const AddIngridientsCard = ({ onSave}: any) => {
  const  [data, setData] = useState(() => [1,2])

  return (
    <div className={styles.wrapper}>
      <div className={styles.list + ` ${styles.scroll}`}>
        {data?.map((item: number, index) => (
          <div className={styles.info}>
            <p>Ингридиент {item}</p>
            <button className={styles.button2} onClick={() => setData(prevState => prevState?.filter((filterItem) => filterItem !== item))}>
              Убрать ингредиент
            </button>
          </div>
        ))}
      </div>


      <button className={styles.button} onClick={() => onSave()}>Сохранить</button>
      <button className={styles.button2 + ' ' + styles.add} onClick={() => setData(prevState => ([...prevState, (prevState[prevState?.length - 1] + 1)]))}>Добавить ингредиент</button>
    </div>
  );
};

export default AddIngridientsCard;