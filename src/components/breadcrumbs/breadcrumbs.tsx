import React from 'react';
import styles from './styles.module.scss'
import {useNavigate} from "react-router-dom";

interface IBreadcrumbsProps {
  values: {
    title: string
    link: string
  }[]
}

const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({ values = [] }) => {

  const navigate = useNavigate()

  const handleNavigate = (link: string) => {
    const preparedLink = ('/' + link).replace('//','/')
    navigate(preparedLink)
  }
  
  return (
    <div className={styles.wrapper}>
      {values.map(({ title, link}, index) => (
        index === values.length - 1 ? (
          <span
            className={styles.text}
            key={link ?? String(index)}
          >
            {title}
          </span>
        ) : (
          <span
            className={styles.text}
            onClick={() => handleNavigate(link)}
            key={link ?? String(index)}
          >
            {title}/
          </span>
        )
      )) }
    </div>
  );
};

export default Breadcrumbs;