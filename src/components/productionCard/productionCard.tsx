import React from 'react';
import styles from './styles.module.scss';

const ProductionCard = ({ onSave, onAdd, onGet}: any) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h2>Описание исходного материала</h2>
      </div>
      <div className={styles.recipe}>
        <h2>Рецепт</h2>
        <ol>
          <li>Шаг 1</li>
          <li>Шаг 2</li>
        </ol>
      </div>
      <button className={styles.button} onClick={() => onSave()}>Сохранить</button>

      <aside>
        <div className={styles.group}>
          <button className={styles.button2} onClick={() => onAdd()}>
            Добавить ингредиенты
          </button>
          <button className={styles.button2} onClick={() => onGet()}>
            Получить исходный материал
          </button>
        </div>
      </aside>
    </div>
  );
};

export default ProductionCard;