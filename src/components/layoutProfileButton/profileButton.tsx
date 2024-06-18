import React, {useState} from 'react';
import styles from "./styles.module.scss";
import {usersLocaleRoles, usersRoles} from "../../types/roles";
import {useUserData} from "../../hooks/useUserData";
import {MenuItem, Select} from "@mui/material";

interface IProfileButtonProps {
  userRole: usersRoles
  setRole: (value: usersRoles) => void
}

const ProfileButton: React.FC<IProfileButtonProps> = ({ userRole, setRole }) => {
  
  const [isOpen,setIsOpen] = useState(false)

  const preparedName = usersLocaleRoles[userRole]
  const preparedImage= `/placeholders/${usersRoles[userRole]}.svg`
  
  const roles = [usersRoles.technologist, usersRoles.client, usersRoles.clientRepresentative, usersRoles.courier, usersRoles.controller, usersRoles.brigadier, usersRoles.agent]

  return (
    <div className={styles.wrapper} onClick={() => setIsOpen(prevState => !prevState)}>
      <span className={styles.text}>
        {preparedName}
      </span>
      <img
        src={preparedImage}
        alt='profile image'
      />
      {isOpen ? (
        <div className={styles.select}>
          <Select
            open={true}
            id="demo-simple"
            value={userRole}
            onChange={(value) => {
              console.log(value.target.value)
              setRole(value.target.value as usersRoles)
            }}
          >
            {roles.map((item) => (
              <MenuItem value={item} key={item}>{usersLocaleRoles[item]}</MenuItem>
            ))}
          </Select>
        </div>
      ) : null}
    </div>
  );
};

export default ProfileButton;