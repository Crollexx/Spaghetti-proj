import React from 'react';
import styles from "./styles.module.scss";

const DefaultButton: React.FC<{onClick: () => void, text: string}> = ({ onClick, text }) => {
  return (
    <button type="submit" className={styles.button} onClick={() => onClick()}>
      {text}
    </button>
  );
};

export default DefaultButton;