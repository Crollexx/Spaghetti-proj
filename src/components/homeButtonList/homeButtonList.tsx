import React, { useEffect, useState } from "react";
import { useUserData } from "../../hooks/useUserData";
import { usersRoles } from "../../types/roles";
import { routes } from "../../routes/routes";
import ButtonMenu from "../buttonMenu/buttonMenu";
import styles from "./styles.module.scss";

const buttonLists: Record<string, { title: string; value: string }[]> = {
  [usersRoles.client]: [
    { title: "Список всех заказов", value: routes.client.orders },
    { title: "Подтвердить доставку", value: routes.client.orders },                         //К добавлению
    { title: "Заполнить анкету", value: routes.client.orders},                              //К добавлению
    { title: "Оформить заказ", value: routes.client.newOrder },                             //К добавлению 
    { title: "Изменить заказ", value: routes.client.orders },                               //К добавлению
    { title: "Утвердить заказ", value: routes.client.orders },                              //К добавлению
  ],
  [usersRoles.clientRepresentative]: [
    { title: "Список всех заказов", value: routes.clientRepresentative.orders },            //К добавлению
    { title: "Не одтвержденные заказы", value: routes.clientRepresentative.orders },
    { title: "Подтвержденные заказы", value: routes.clientRepresentative.ordersConfirm },
    { title: "Список договоров", value: routes.clientRepresentative.orders },               //К добавлению
    { title: "Отчеты", value: routes.clientRepresentative.feedback() },                     //К добавлению
    { title: "Форма создания клиента", value: routes.clientRepresentative.orders },         //К добавлению
    { title: "Форма создания договора", value: routes.clientRepresentative.orders },        //К добавлению
  ],
  [usersRoles.brigadier]: [
    { title: "Анкеты исходного материала", value: routes.brigadier.orders },                //К добавлению
    { title: "Список всех заказов", value: routes.brigadier.orders },
    { title: "Отчеты", value: routes.brigadier.orders },                                    //К добавлению
    { title: "Список агентов", value: routes.brigadier.questionnaires },
    { title: "Список доставки", value: routes.brigadier.orders },                           //К добавлению
    { title: "Поставка исходного материала", value: routes.brigadier.orders },              //К добавлению
  ],
  [usersRoles.technologist]: [
    { title: "Анкеты исходного материала", value: routes.technologist.orders },             //К добавлению
    { title: "Отчеты", value: routes.technologist.orders },                                 //К добавлению
    { title: "Список заказов", value: routes.technologist.orders },
    { title: "Изготовление", value: routes.technologist.production },
    { title: "Добавление ингредиентов", value: routes.technologist.ingridients },           //К добавлению
    { title: "Подбор исходного материала", value: routes.technologist.questionnaires },
  ],
  [usersRoles.agent]: [
    { title: "Сбор информации об ИО", value: routes.agent.orders },                         //К добавлению
    { title: "Установить нормы по анкетам", value: routes.agent.orders },                   //К добавлению
    { title: "Нормы по анкетам", value: routes.agent.orders },                              //К добавлению
    { title: "Изменить нормы по анкетам", value: routes.agent.orders },                     //К добавлению
  ],
  [usersRoles.courier]: [
    { title: "Список всех заказов", value: routes.courier.orders },
    { title: "Список анкет обратной связи", value: routes.courier.orders },                 //К добавлению
    { title: "Формирование списка доставки", value: routes.courier.orders },                //К добавлению
  ],
  [usersRoles.controller]: [
    { title: "Анкеты обратной связи", value: routes.controller.feedbackList },
    { title: "Результаты опроса", value: routes.controller.feedback() },                    //К добавлению
  ],
};

const HomeButtonList: React.FC = () => {
  const { userRole } = useUserData();
  const [menu, setMenu] = useState<{ title: string; value: string }[]>([]);

  useEffect(() => {
    if (userRole && buttonLists[userRole]) {
      setMenu(buttonLists[userRole]);
    } else {
      setMenu([]);
    }
  }, [userRole]);

  return (
    <div className={styles.container}>
      {menu ? <ButtonMenu menu={menu} /> : null}
    </div>
  );
};

export default HomeButtonList;
