import React, { useState } from 'react';
import { useEffect } from 'react';
import { MACHINE_CODING_HEADERS } from '../../../constant/constant';
import PaginationButtons from './pagination-components/PaginationButtons';
import Users from './pagination-components/Users';

import style from './style.module.css';

const LIMIT = 2;

const Pagination = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState({});
  const [paginationButtons, setPaginationButtons] = useState([]);

  const fetchUsers = async (page) => {
    const response = await fetch(`http://localhost:3000/users?page=${page}&limit=${LIMIT}`);
    const data = await response.json();
    if (response.status === 200) {
      setUsers(data);
    }
    return data;
  };

  const createPaginationButtons = (totalRecord) => {
    const buttons = new Array(10).fill({}).map((_, i) => {
      if (i === 0) {
        return { key: `btn${i}`, value: i + 1, selected: true };
      } else if (i === 8) {
        return { key: `btn${i}`, value: '...', selected: false, seperatorPosition: 'last' };
      } else if (i === 9) {
        return { key: `btn${i}`, value: Math.floor(totalRecord / LIMIT), selected: false };
      } else {
        return { key: `btn${i}`, value: i + 1, selected: false };
      }
    });
    setPaginationButtons(buttons);
  };

  const onPaginationButtonClick = (button) => {
    if (button.value !== '...') {
      const updatedPaginationButton = paginationButtons.map((b) => {
        if (b.key === button.key) {
          return { ...b, selected: true };
        } else {
          return { ...b, selected: false };
        }
      });

      setPaginationButtons(updatedPaginationButton);
      setPage(button.value);
    } else {
      let currentSelectedButton;
      const seperatorPosition = button.seperatorPosition;
      const updatePaginationButton = paginationButtons.map((b, i) => {
        if (seperatorPosition === 'last') {
          if (i === 0 || i > 7) {
            const isLastButTwoButton = Math.floor(users.totalRecords / LIMIT) - (currentSelectedButton + 1) === LIMIT;
            if (i === 8 && isLastButTwoButton) {
              return { ...b, value: Math.floor(users.totalRecords / LIMIT) - 1, selected: false };
            } else {
              return { ...b, selected: false };
            }
          } else if (i === 6) {
            currentSelectedButton = b.value + 2;
            return { ...b, value: b.value + 2, selected: true };
          } else if (i === 1) {
            return { ...b, selected: false, value: '...', seperatorPosition: 'first' };
          } else {
            return { ...b, value: b.value + 2, selected: false };
          }
        } else {
          if (i === 1) {
            return page === 5 ? { ...b, value: 2, selected: false } : { ...b, selected: false };
          } else if (i > 2 && i < 8) {
            return { ...b, value: b.value - 2, selected: false };
          } else if (i === 2) {
            currentSelectedButton = b.value - 2;
            return { ...b, value: b.value - 2, selected: true };
          } else {
            const isLastButTwoButton = Math.floor(users.totalRecords / LIMIT) - (currentSelectedButton + 1) === LIMIT;
            if (i === 8 && !isLastButTwoButton) {
              return { ...b, value: '...', selected: false };
            } else {
              return { ...b, selected: false };
            }
          }
        }
      });
      setPaginationButtons(updatePaginationButton);
      setPage(currentSelectedButton);
    }
  };

  useEffect(() => {
    fetchUsers().then((data) => {
      createPaginationButtons(data.totalRecords);
    });
  }, []);

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  return (
    <div>
      <header className={style.header}>{MACHINE_CODING_HEADERS.PAGINATION_HEADER}</header>
      <Users users={users} />
      <PaginationButtons paginationButtons={paginationButtons} onPaginationButtonClick={onPaginationButtonClick} />
    </div>
  );
};

export default Pagination;
