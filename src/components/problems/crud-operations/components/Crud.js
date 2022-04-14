import React, { useEffect, useState } from 'react';
import { EMPLOYEE_OPERATIONS, MACHINE_CODING_HEADERS, URL } from '../../../../constant/constant';
import Employee from './Employee';
import style from '../crud.module.css';
import Popup from '../../../app-components/popup/Popup';
import { getOptions } from '../utils/api';
import Form from './Form';
import { useFetch } from '../hooks/useFetch';
import { filteringOptions, sortingOptions } from '../utils/data';

let currentGlobalData = [];

const Crud = () => {
  const [fetchEmployeeState, fetchEmployees] = useFetch(URL.EMPLOYEES, getOptions(EMPLOYEE_OPERATIONS.FETCH_EMPLOYEES));
  const [_saveEmployeeState, saveEmployee] = useFetch(URL.EMPLOYEES, getOptions(EMPLOYEE_OPERATIONS.SAVE_EMPLOYEE));
  const [_editEmployeeState, saveEditedEmployee] = useFetch(
    URL.EMPLOYEES,
    getOptions(EMPLOYEE_OPERATIONS.EDIT_EMPLOYEE)
  );
  const [_deleteEmployeeState, deleteEmployee] = useFetch(
    URL.EMPLOYEES,
    getOptions(EMPLOYEE_OPERATIONS.DELETE_EMPLOYEE)
  );
  const [popOpen, setPopOpen] = useState(false);
  const [isEditPhase, setIsEditPhase] = useState(false);
  const [isDeletePhase, setIsDeletePhase] = useState(false);
  const [currentSelectedEmployee, setCurrentSelectedEmployee] = useState({});
  const [sortBySelected, setSortBySelected] = useState('name');
  const [filterBySkill, setFilterBySkill] = useState('');
  const [search, setSearch] = useState('');

  const { loading, error, response: data, setResponse: setEmployee } = fetchEmployeeState;

  useEffect(async () => {
    const data = await fetchEmployees();
    currentGlobalData = data;
    const newData = [...data];
    sortByValue(newData, sortBySelected);
    setEmployee(newData);
  }, []);

  const handleAddRecord = () => setPopOpen(true);

  const handlePopupClose = () => {
    setPopOpen(false);
    setIsEditPhase(false);
    setIsDeletePhase(false);
    setCurrentSelectedEmployee({});
  };

  const handleSaveEmployee = async (employee) => {
    const response = await saveEmployee({ body: JSON.stringify(employee) }, false);
    const newData = [...data, ...(response && [response])];
    setEmployee(newData);
    handlePopupClose();
  };

  const handleEditRecord = (employee) => {
    setIsEditPhase(true);
    setCurrentSelectedEmployee(employee);
    setPopOpen(true);
  };

  const saveEditedRecord = async (employee) => {
    const urlQueryParams = `/${currentSelectedEmployee._id}`;
    const response = await saveEditedEmployee({ body: JSON.stringify(employee) }, false, urlQueryParams);
    const newData = data.map((e) => (e._id === response._id ? response : e));
    setEmployee(newData);
    handlePopupClose();
  };

  const handleDeleteRecord = (employee) => {
    setPopOpen(true);
    setIsDeletePhase(true);
    setCurrentSelectedEmployee(employee);
  };

  const deleteRecord = async () => {
    const urlQueryParams = `/${currentSelectedEmployee._id}`;
    const response = await deleteEmployee({}, false, urlQueryParams);
    const newData = data.filter((e) => e._id !== response._id);
    setEmployee(newData);
    handlePopupClose();
  };

  const sortByValue = (arr, value) =>
    value === 'name' ? arr.sort((a, b) => (a.name > b.name ? 1 : -1)) : arr.sort((a, b) => a[value] - b[value]);

  const handleSortByChange = (e) => {
    setSortBySelected(e.target.value);
    const newData = [...data];
    sortByValue(newData, e.target.value);
    setEmployee(newData);
  };

  const handleFilterBySkill = (e) => {
    setFilterBySkill(e.target.value);
    const filteredData =
      e.target.value.length > 0
        ? currentGlobalData.filter(
            (emp) => emp.skills.findIndex((s) => s.toLowerCase() === e.target.value.toLowerCase()) !== -1
          )
        : currentGlobalData;
    setEmployee(filteredData);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filteredData = currentGlobalData.filter((emp) =>
      emp.name.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setEmployee(filteredData);
  };

  return (
    <div>
      {popOpen && (
        <Popup>
          <Form
            handlePopupClose={handlePopupClose}
            handleSaveEmployee={isEditPhase ? saveEditedRecord : isDeletePhase ? deleteRecord : handleSaveEmployee}
            isEditPhase={isEditPhase}
            isDeletePhase={isDeletePhase}
            currentSelectedEmployee={currentSelectedEmployee}
          />
        </Popup>
      )}
      <header className={style.header}>{MACHINE_CODING_HEADERS.CRUD_HEADER}</header>
      <section>
        <button onClick={handleAddRecord}>Add Record</button>
        <div className={style.userAction}>
          <label htmlFor="sortBy">Sort By</label>
          <select value={sortBySelected} onChange={handleSortByChange} id="sortBy">
            {sortingOptions.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className={style.userAction}>
          <label htmlFor="filterBy">Filter By Skill</label>
          <select value={filterBySkill} onChange={handleFilterBySkill}>
            {filteringOptions.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className={style.userAction}>
          <label htmlFor="search">Search By Name</label>
          <input type="search" id="search" value={search} onChange={handleSearch} autoComplete="off" />
        </div>
      </section>
      <section className={style.employeesContainer}>
        {loading
          ? 'Loading...'
          : error
          ? error
          : data.map((e) => (
              <Employee key={e._id} e={e} handleEditRecord={handleEditRecord} handleDeleteRecord={handleDeleteRecord} />
            ))}
      </section>
    </div>
  );
};

export default Crud;
