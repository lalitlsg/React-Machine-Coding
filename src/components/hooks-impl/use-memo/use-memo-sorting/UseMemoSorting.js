import React, { useReducer, useState, useEffect, useMemo } from 'react';
import style from './style.module.css';

const initialState = {
  users: [],
  error: '',
  loading: false,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return {
        ...state,
        loading: true,
      };
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'FETCH_USERS_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const sortList = (list, sortBy) => {
  console.log('sortList', list, sortBy);
  const arr = [...list];
  sortBy === 'ASC'
    ? arr.sort((a, b) => a.name.length - b.name.length)
    : arr.sort((a, b) => b.name.length - a.name.length);
  return arr;
};

const renderUsers = (users) => {
  return users.map((user) => (
    <div key={user.id}>
      <span>{user.name}</span>
    </div>
  ));
};

const UseMemoSorting = () => {
  const [user, dispatch] = useReducer(userReducer, initialState);
  const [ascState, setAscState] = useState(false);
  const [descState, setDescState] = useState(false);
  const [count, setCount] = useState(0);

  const fetchUsers = async () => {
    dispatch({ type: 'FETCH_USERS' });
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      const users = data.map((user) => ({ id: user.id, name: user.name }));
      dispatch({ type: 'SET_USERS', payload: users });
    } catch (error) {
      dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
    }
  };

  const asc = useMemo(() => sortList(user.users, 'ASC'), [ascState]);
  const desc = useMemo(() => sortList(user.users, 'DESC'), [descState]);

  const onListSort = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count === 1) {
      setAscState(true);
    } else if (count === 2) {
      setDescState(true);
    } else {
      setCount(0);
    }
  }, [count]);

  return (
    <div>
      <section className={style.section}>
        <h3>UseMemoSorting</h3>
      </section>
      <section className={style.section}>
        <button onClick={fetchUsers} disabled={user.users.length > 0}>
          Fetch Users
        </button>
        <button onClick={onListSort}>Sort</button>
      </section>
      <section className={style.section}>
        <article>
          {user.loading
            ? 'Loading...'
            : user.error
            ? user.error
            : count === 1
            ? renderUsers(asc)
            : count === 2
            ? renderUsers(desc)
            : renderUsers(user.users)}
        </article>
      </section>
    </div>
  );
};

export default UseMemoSorting;
