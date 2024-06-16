import React from 'react';
import styles from "./styles.module.scss";
import {IUserInfo} from "../layout/layout";
import {usersLocaleRoles, usersRoles} from "../../types/roles";

interface IProfileButtonProps {
  user: IUserInfo
}
const ProfileButton: React.FC<IProfileButtonProps> = ({ user}) => {
  
  const preparedName = !!user?.name ? user.name : usersLocaleRoles[user.roleID]
  const preparedImage = !!user?.img ? user?.img : `/placeholders/${usersRoles[user.roleID]}.svg`
  
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