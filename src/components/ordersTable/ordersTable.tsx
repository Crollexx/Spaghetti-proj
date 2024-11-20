import React from 'react';
import styles from './styles.module.scss'
import {IOrder, orderAvailableStatuses, orderStatuses} from "../../types/order";
import SelectStatusBadge from "../selectStatusBadge/selectStatusBadge";
import StatusBadge from "../statusBadge/statusBadge";
import {usersRoles} from "../../types/roles";
import {useUserData} from "../../hooks/useUserData";

interface IOrdersTableProps {
  data: IOrder[]
  showFilters?: boolean
  updateStatusAvailable?: boolean
  onFilter?: (value: orderStatuses) => void
  onUpdateStatus?: (value: orderStatuses, id: number) => void
  onClick?: ( id: number) => void
}

const OrdersTable:React.FC<IOrdersTableProps> = ({
                                                   data,
                                                   showFilters = false ,
                                                   onFilter ,
                                                   onUpdateStatus ,
                                                   onClick,
  updateStatusAvailable,
                                                 }) => {

  const {userRole, onRoleChange} = useUserData()
  const getOrderText = (status: orderStatuses) => {
    switch (status) {
      case orderStatuses.created:
        return 'В обработке'
      case orderStatuses.cooking:
        return 'Готовится'
      case orderStatuses.awaitDelivery:
        return 'Готов к доставке'
      case orderStatuses.inDelivery:
        return 'У курьера'
      case orderStatuses.delivered:
        return 'Ожидает подтверждения'
      case orderStatuses.done:
        return 'Доставлено'
    }
  }
  
  return (
    <div className={styles.wrapper}>
      {showFilters ? (
        <div className={styles.filters}>
          <span>
            Выберите статус
          </span>
          <select onClick={(e) => {
            onFilter && onFilter(e?.currentTarget?.value as orderStatuses)
          }}>
            {orderAvailableStatuses?.map((item) => (
              <option value={item} key={item}>
                {getOrderText(item)}
              </option>
            ))}
            <option value='reset' key='reset-filter'>
              Сбросить фильтр
            </option>
          </select>
        </div>
      ) : null}
      <table>
        <thead>
        <tr>
          <th>
          № заказа
          </th>
          <th>
            Состав
          </th>
          <th>
            Время заказа
          </th>
          <th>
            Приготовить к
          </th>
          <th>
            Статус
          </th>
          <th>
            Ответственный
          </th>
          { userRole === usersRoles.technologist ? (
            <th>
              К заказу
            </th>
          ) : null}
        </tr>
        </thead>
        <tbody>
        {data?.map(({
                      id,
                      items,
                      orderDate,
                      deliveryDate,
                      status,
                      user,
                    }) => (
          <tr key={id}>
            <th>
              {id}
            </th>
            <th className={styles.list}>
              {items?.map(({ count, name, id}) => (
                <span key={id}>
                  {count}&nbsp;{name}
                </span>
              ))}
            </th>
            <th>
              {orderDate}
            </th>
            <th>
              {deliveryDate}
            </th>
            <th >
              {updateStatusAvailable ? (
                <SelectStatusBadge
                  onUpdateStatus={(status) => onUpdateStatus && onUpdateStatus(status, id)}
                  selectedStatus={status}
                  
                />
              ) : (
                <StatusBadge
                  type='order'
                  status={status}
                  className={styles.badge}
                />
              )}
             
            </th>
            <th>
              {user}
            </th>
            { userRole === usersRoles.technologist ? (
              <th>
                <button className={styles.button} onClick={() => onClick && onClick(id)}>
                  Перейти
                </button>
              </th>
            ) : null}
          </tr>
        ))}
        
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;