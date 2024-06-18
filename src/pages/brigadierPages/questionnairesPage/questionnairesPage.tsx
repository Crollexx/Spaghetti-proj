import React from 'react';
import styles from "../../clientPages/ordersPage/styles.module.scss";
import DefaultList from "../../../components/list/list";
import {IListItem} from "../../../components/listItem/listItem";
import {routes} from "../../../routes/routes";

const BrigadierQuestionnairesPage = () => {
  
  const questionnaire: IListItem[] = [
    {
      itemID: '101',
      link: routes.brigadier.questionnaire('101')
    },{
      itemID: '102',
      link: routes.brigadier.questionnaire('102')
    },{
      itemID: '103',
      link: routes.brigadier.questionnaire('103')
    },{
      itemID: '104',
      link: routes.brigadier.questionnaire('104')
    },
  ]
  
  return (
    <>
      <h3 className={styles.text}>Анкеты</h3>
      <DefaultList
        data={questionnaire}
        onSelectFilter={() => {
        }}
        onClearFilter={() => {
        }}
      />
    </>
  );
};

export default BrigadierQuestionnairesPage;