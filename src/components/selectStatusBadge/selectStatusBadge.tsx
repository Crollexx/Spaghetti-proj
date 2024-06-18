import React from 'react';
import styles from './styles.module.scss'
import StatusBadge from "../statusBadge/statusBadge";
import { Popper} from "@mui/material";
import {orderAvailableStatuses, orderStatuses} from "../../types/order";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ISelectStatusBadgeProps {
  selectedStatus: orderStatuses
  onUpdateStatus: (value: orderStatuses) => void
}
const SelectStatusBadge: React.FC<ISelectStatusBadgeProps> = ({ selectedStatus, onUpdateStatus }) => {
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  
  
  const preparedMenu = orderAvailableStatuses.filter((item) => item !== selectedStatus)
  
  
  return (
    <div className={styles.wrapper}>
      
      <StatusBadge
        type='order'
        status={selectedStatus}
        onClick={(e) => handleClick(e as React.MouseEvent<HTMLElement>)}
        className={styles.badge}
        icon={<ExpandMoreIcon fontSize="small"/>}
      />
      
      <Popper id={id} open={open} anchorEl={anchorEl} className={styles.popper}>
        {preparedMenu?.map((item) => (
          <StatusBadge
            key={item}
            type='order'
            status={item}
            onClick={(e) => {
              handleClick(e as React.MouseEvent<HTMLElement>)
              onUpdateStatus(item)
            }}
            className={styles.badge}
          />
        ))}
      </Popper>
    </div>
  );
};

export default SelectStatusBadge;