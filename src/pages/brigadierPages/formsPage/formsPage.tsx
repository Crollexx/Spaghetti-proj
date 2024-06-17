import React from 'react';
import styles from "../../clientPages/ordersPage/styles.module.scss";
import DefaultList from "../../../components/list/list";

const BrigadierFormsPage = () => {
  
  const orders = [
    {
      title: '111',
      id: 1
    },{
      title: '222',
      id: 2
    },{
      title: '333',
      id: 3
    },{
      title: '444',
      id: 4
    },
  ]
  return (
    <>
      <h3 className={styles.text}>Анкеты</h3>
      <DefaultList
        // @ts-ignore
        data={orders}
        onSelectFilter={() => {
        }}
        onClearFilter={() => {
        }}
      />
    </>
  );
};

export default BrigadierFormsPage;