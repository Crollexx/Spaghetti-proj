import React, {useState} from 'react';
import styles from './styles.module.scss'
import {IOffer, IOrder} from "../../types/order";
import {Checkbox, TextField} from "@mui/material";

interface INewOrderCardProps {
  onSubmit: (data:{
    deliveryType: 'DELIVERY' | 'SELF_SERVICE',
    servingType: 'TOGO' | 'HERE' ,
    paymentType: "CASH",
    menuItemsIds: number[]
  }) => void;
  data: IOffer[]
}

const NewOrderCard: React.FC<INewOrderCardProps> = ({
  onSubmit,
  data

                                              }) => {

  const [selectedItem, setSelectedItem] = useState<'DELIVERY' | 'SELF_SERVICE' | null>(null);
  const [serving, setServing] = useState<'TOGO' | 'HERE' | null>(null);

  const handleClick = (value: 'DELIVERY' | 'SELF_SERVICE') => {
    setSelectedItem(value)
  }

  const handleSelectServing = (value: 'TOGO' | 'HERE') => {
    setServing(value)
  }

  const handleSubmit = () => {
    const submitData = {
      deliveryType: selectedItem,
      servingType: serving,
      paymentType: "CASH",
      menuItemsIds: data?.map(({id}) => id)
    }
    onSubmit(submitData as any)
  }


  return (
    <div className={styles.wrapper}>
      <span className={styles['title-main']}>
        Ваш заказ:
      </span>
      <div className={styles.list}>
        {data?.map(({name, price, id}, index) => (
          <div className={styles.item} key={`test_42${id}`} id={`test_42${id}`}>
            <span>
              {index + 1}. {name}
            </span>
            <span>
             {price} p
            </span>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <div className={styles['content-wrapper']}>
          <span className={styles.title}>
            Способ доставки:
          </span>
          <div className={styles['type-wrapper']}>
            <Checkbox
              value="SELF_SERVICE"
              checked={selectedItem === 'SELF_SERVICE'}
              className={styles['type-checkbox']}
              onChange={() => handleClick('SELF_SERVICE')}
            />
            <span className={styles.type}>
              Самовывоз
            </span>
          </div>
          <div className={styles['type-wrapper']}>
            <Checkbox
              value="DELIVERY"
              checked={selectedItem === 'DELIVERY'}
              className={styles['type-checkbox']}
              onChange={() => handleClick('DELIVERY')}
            />
            <span className={styles.type}>
              Доставка
            </span>
          </div>
        </div>
        {!!selectedItem ? (
          selectedItem === 'SELF_SERVICE' ? (
            <div className={styles['content-wrapper']}>
              <span className={styles.title}>
                Способ сервировки:
              </span>
              <div className={styles['type-wrapper']}>
                <Checkbox
                  value="TOGO"
                  checked={serving === 'TOGO'}
                  className={styles['type-checkbox']}
                  onClick={() => handleSelectServing('TOGO')}
                />
                <span className={styles.type}>
                  В пакете
                </span>
              </div>
              <div className={styles['type-wrapper']}>
                <Checkbox
                  value="HERE"
                  checked={serving === 'HERE'}
                  className={styles['type-checkbox']}
                  onClick={() => handleSelectServing('HERE')}
                />
                <span className={styles.type}>
                  В зале
                </span>
              </div>
            </div>
          ) : (
            <div className={styles['content-wrapper']}>
              <span className={styles.title}>
                Адрес доставки:
              </span>
              <TextField
                id="outlined-multiline-static"
                fullWidth
                rows={2}
                className={styles.textarea}
                placeholder='Введите адрес доставки'
              />
            </div>
          )
        ) : null}
      </div>
      <button type="submit" className={styles.button} onClick={() => handleSubmit()}>
        Сохранить
      </button>
    </div>
  );
};

export default NewOrderCard;