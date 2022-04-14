import React from 'react';
import style from '../style.module.css';

const Users = ({ users }) => {
  return (
    <section className={style.usersContainer}>
      {users.results &&
        users.results.map((user) => (
          <div key={user._id} className={style.user}>
            <div>{user._id}</div>
            <div>{user.name}</div>
          </div>
        ))}
    </section>
  );
};

export default Users;
