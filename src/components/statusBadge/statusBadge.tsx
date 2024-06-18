import React, {MouseEventHandler} from 'react';
import styles from './styles.module.scss'
import {orderStatuses} from "../../types/order";
import {feedbackStatuses} from "../../types/feedback";
interface IBaseBadgeProps {
  onClick?: MouseEventHandler<HTMLDivElement>
  className?: string
  icon?: React.ReactNode
}
interface IOrderBadgeProps extends IBaseBadgeProps{
  status: orderStatuses
  type: 'order'
}

interface IFeedbackBadgeProps extends IBaseBadgeProps{
  status: feedbackStatuses
  type: 'feedback'
}

type IListStatusBadgeProps = IOrderBadgeProps | IFeedbackBadgeProps

const StatusBadge: React.FC<IListStatusBadgeProps> = ({
                                                        status,
                                                        type = 'order',
                                                        onClick,
                                                        className= '',
  icon
                                                      }) => {

  const getOrderColor = ( status: orderStatuses ) => {
    switch (status) {
      case orderStatuses.created:
        return '#EFA413'
      case orderStatuses.cooking:
        return '#F21111'
      case orderStatuses.awaitDelivery:
        return '#CDE18F'
      case orderStatuses.inDelivery:
        return '#9AD08A'
      case orderStatuses.delivered:
        return '#FFF627'
      case orderStatuses.done:
        return '#288F25'
    }
  }

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
  
  const getFeedbackColor = (status: feedbackStatuses) => {
    switch (status) {
      case feedbackStatuses.done:
        return '#288F25'
      case feedbackStatuses.requested:
        return '#EF8A13'
      case feedbackStatuses.unset:
        return '#EFBF13'
    }
  }
  
  const getFeedbackText = (status: feedbackStatuses) => {
    switch (status) {
      case feedbackStatuses.done:
        return 'Отзыв получен'
      case feedbackStatuses.requested:
        return 'Отзыв запрошен'
      case feedbackStatuses.unset:
        return 'Запросить отзыв'
    }
  }
  
  const preparedText = type === 'order'
    ? getOrderText(status as orderStatuses)
    : getFeedbackText(status as feedbackStatuses)
  
  const preparedColor = type === 'order'
    ? getOrderColor(status as orderStatuses)
    : getFeedbackColor(status as feedbackStatuses)

  return (
    <div className={styles.wrapper + ' ' + className} style={{ background: preparedColor}} onClick={onClick}>
      {preparedText}{!!icon ? icon : null}
    </div>
  );
};

export default StatusBadge;