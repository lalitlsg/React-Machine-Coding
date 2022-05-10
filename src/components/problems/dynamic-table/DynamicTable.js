import React, { useState } from 'react';
import { useEffect } from 'react';
import { POST, COMMENT, ALBUMS, PHOTOS, TODOS, USERS } from './data';
import style from './style.module.css';

const TABLES = {
  POST,
  COMMENT,
  ALBUMS,
  PHOTOS,
  TODOS,
  USERS,
};

const OPTIONS = ['POST', 'COMMENT', 'ALBUMS', 'PHOTOS', 'TODOS', 'USERS'];

const DynamicTable = () => {
  const [bodyData, setBodyData] = useState([]);
  const [tableOption, setTableOption] = useState('POST');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${TABLES[tableOption].API}`)
      .then((response) => response.json())
      .then((data) => {
        setBodyData(data);
      });
  }, [tableOption]);

  const onTableOptionChange = (e) => {
    const { value } = e.target;
    setTableOption(value);
    setBodyData([]);
  };

  return (
    <div className={style.main}>
      <section className={style.header}>
        <h1>Dynamic Table</h1>
      </section>
      <section className={style.tableOptions}>
        <select value={tableOption} onChange={onTableOptionChange}>
          {OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </section>
      <section className={style.tableSection}>
        <table >
          <thead>
            <tr>
              {TABLES[tableOption].COLUMNS.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyData.map((row, index) => (
              <tr key={index}>
                {TABLES[tableOption].ROWS.map((rowData, index) => (
                  <td key={index}>
                    {typeof row[rowData] === 'object' ? (
                      <pre>{JSON.stringify(row[rowData], null, 2)}</pre>
                    ) : (
                      row[rowData].toString()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DynamicTable;
