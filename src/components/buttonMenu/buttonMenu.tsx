import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

interface MenuProps {
  menu: { title: string; value: string }[];
}

const ButtonMenu: React.FC<MenuProps> = ({ menu }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Выберите действие:</h3>
      <div className={styles.menu}>
        {menu.map((item, index) => (
          <button
            key={index}
            className={styles.menuButton}
            onClick={() => navigate(item.value)}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonMenu;
