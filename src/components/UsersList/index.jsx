import React from 'react';
import styles from './UsersList.module.css';
import { User } from '../User';
import { Skeleton } from '../User/Skeleton';

export const UsersList = ({ users, onClickUser, isLoading }) => {
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  const renderUsers = users.map((user) => (
    <User key={user.id} user={user} onClick={() => onClickUser(user)} />
  ));

  return <ul className={styles.list}>{isLoading ? skeletons : renderUsers}</ul>;
};
