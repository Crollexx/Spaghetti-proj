import React from 'react';
import styles from "./styles.module.scss";
import {usersLocaleRoles, usersRoles} from "../../types/roles";

interface IProfileButtonProps {
  userRole: usersRoles
}

const ProfileButton: React.FC<IProfileButtonProps> = ({ userRole }) => {

  const preparedName = usersLocaleRoles[userRole]
  const preparedImage= `/placeholders/${usersRoles[userRole]}.svg`

  return (
    <div className={styles.wrapper}>
      <span className={styles.text}>
        {preparedName}
      </span>
      <img
        src={preparedImage}
        alt='profile image'
      />
    </div>
  );
};

export default ProfileButton;