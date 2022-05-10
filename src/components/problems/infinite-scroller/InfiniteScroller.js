import React from 'react';
import { useEffect, useState } from 'react';
import { MACHINE_CODING_HEADERS } from '../../../constant/constant';
import style from './style.module.css';

const LIMIT = 5;

const InfiniteScroller = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [stopFetching, setStopFetching] = useState(false);

  const withDebounce = (fn, delay = 500) => {
    let timerId;
    return (...args) => {
      if (stopFetching) {
        return;
      }
      if (timerId) {
        clearTimeout(timerId);
      }
      setIsLoading(true);
      timerId = setTimeout(() => {
        fn(...args);
        setIsLoading(false);
      }, delay);
    };
  };

  const fetchUsers = async (page) => {
    if (stopFetching) return;
    const response = await fetch(`http://localhost:3000/users?page=${page}&limit=${LIMIT}`);
    const data = await response.json();
    if (!data.next) {
      setStopFetching(true);
    }
    setIsLoading(false);
    if (response.status === 200) {
      setUsers([...users, ...data.results]);
    }
    return data;
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const onSectionScroll = withDebounce((e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1);
    }
  }, 2000);

  return (
    <div>
      <header className={style.header}>{MACHINE_CODING_HEADERS.INFINITE_SCROLLER_HEADER}</header>
      <section className={style.scrollSection} onScroll={onSectionScroll}>
        {users.map((user) => (
          <div key={user._id} className={style.userCard}>
            <p className={style.userId}>{user._id}</p>
            <p>{user.name}</p>
          </div>
        ))}
        {isLoading && <div>Loading...</div>}
      </section>
    </div>
  );
};

export default InfiniteScroller;
