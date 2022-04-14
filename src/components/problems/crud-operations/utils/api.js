import { EMPLOYEE_OPERATIONS } from '../../../../constant/constant';

export const getOptions = (action = '', data = {}) => {
  switch (action) {
    case EMPLOYEE_OPERATIONS.FETCH_EMPLOYEES:
      return {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
    case EMPLOYEE_OPERATIONS.SAVE_EMPLOYEE:
      return {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
    case EMPLOYEE_OPERATIONS.EDIT_EMPLOYEE:
      return {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
    case EMPLOYEE_OPERATIONS.DELETE_EMPLOYEE:
      return {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      };
    default:
      return {};
  }
};
