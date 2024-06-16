import React from 'react';
import styles from './'
import DefaultList from "../../../components/list/list";

const ClientOrdersPage = () => {
  
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
    <div className={}>
      <DefaultList data={orders} showFilters={true}/>
    </div>
  );
};

export default ClientOrdersPage;