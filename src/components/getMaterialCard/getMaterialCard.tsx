import React, {useState} from 'react';
import styles from './styles.module.scss';
import {useNavigate} from "react-router-dom";

const GetMaterialCard = ({ onSave}: any) => {
  const  [data, setData] = useState(() => [1,2])
  const  [selected, setSelected] = useState(() => [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.list + ` ${styles.scroll}`}>
        {data?.map((item) => (
          <div className={styles.row}>
            <div className={styles.info}>
              <p>Материал {item}</p>
            </div>
            <input type='checkbox' className={styles.checkbox}/>
          </div>
        ))}
      </div>

      <button className={styles.button} onClick={() => onSave()}>Выбрать</button>
    </div>
  );
};

export default GetMaterialCard;