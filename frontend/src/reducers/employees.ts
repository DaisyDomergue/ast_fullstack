import { Employee } from "../types/Employee";
import {
  EmployeeActionTypes,
  ADD_EMPLOYEE,
  REMOVE_EMPLOYEE,
  EDIT_EMPLOYEE,
  SET_EMPLOYEE
} from "../types/actions";

const employeesReducerDefaultState: Employee[] = [
  {
    id:"1",
    name:"simon",
    gender:"male",
    salary:2000,
    dob:1994
  }
];

const employeeReducer = (
  state = employeesReducerDefaultState,
  action: EmployeeActionTypes
): Employee[] => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return [...state, action.employee];
    case REMOVE_EMPLOYEE:
      return state.filter(({ id }) => id !== action.id);
    case EDIT_EMPLOYEE:
      return state.map(employee => {
        if (employee.id === action.employee.id) {
          return {
            ...employee,
            ...action.employee
          };
        } else {
          return employee;
        }
      });
    case SET_EMPLOYEE:
      return action.employees;
    default:
      return state;
  }
};

export { employeeReducer };
