import React from 'react';
import styles from './PopupUser.module.scss';

export const PopupUser = ({ user, onClose }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.content}>
        <h2 className={styles.name}>{user.name}</h2>

        <button className={styles.close} onClick={onClose}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.585786 0.585786C1.36683 -0.195262 2.63317 -0.195262 3.41421 0.585786L10 7.17157L16.5858 0.585786C17.3668 -0.195262 18.6332 -0.195262 19.4142 0.585786C20.1953 1.36683 20.1953 2.63317 19.4142 3.41421L12.8284 10L19.4142 16.5858C20.1953 17.3668 20.1953 18.6332 19.4142 19.4142C18.6332 20.1953 17.3668 20.1953 16.5858 19.4142L10 12.8284L3.41421 19.4142C2.63317 20.1953 1.36683 20.1953 0.585786 19.4142C-0.195262 18.6332 -0.195262 17.3668 0.585786 16.5858L7.17157 10L0.585786 3.41421C-0.195262 2.63317 -0.195262 1.36683 0.585786 0.585786Z"
              fill="black"
            />
          </svg>
        </button>

        <div className={styles.container}>
          <p className={styles.descr}>Телефон:</p>
          <p className={styles.info}>{user.phone}</p>
        </div>
        <div className={styles.container}>
          <p className={styles.descr}>Почта:</p>
          <p className={styles.info}>{user.email}</p>
        </div>
        <div className={styles.container}>
          <p className={styles.descr}>Дата приема:</p>
          <p className={styles.info}>{user.hire_date}</p>
        </div>
        <div className={styles.container}>
          <p className={styles.descr}>Должность:</p>
          <p className={styles.info}>{user.position_name}</p>
        </div>
        <div className={styles.container}>
          <p className={styles.descr}>Подразделение:</p>
          <p className={styles.info}>{user.department}</p>
        </div>

        <p className={styles.descr_bottom}>Дополнительная информация:</p>
        <p className={styles.info_bottom}>
          Разработчики используют текст в качестве заполнителя макта страницы. Разработчики
          используют текст в качестве заполнителя макта страницы.
        </p>
      </div>
    </div>
  );
};
