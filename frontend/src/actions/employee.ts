import { uuid } from "uuidv4";
import { Employee } from "../types/Employee";
import {
  ADD_EMPLOYEE,
  AppActions,
  REMOVE_EMPLOYEE,
  EDIT_EMPLOYEE,
  SET_EMPLOYEE
} from "../types/actions";
import { Dispatch } from "redux";
import { AppState } from "../store/configureStore";

export const addEmployee = (employee: Employee): AppActions => ({
  type: ADD_EMPLOYEE,
  employee
});

export const removeEmployee = (id: string): AppActions => ({
  type: REMOVE_EMPLOYEE,
  id
});

export const editEmployee = (employee: Employee): AppActions => ({
  type: EDIT_EMPLOYEE,
  employee
});

export const setEmployees = (employees: Employee[]): AppActions => ({
  type: SET_EMPLOYEE,
  employees
});

export const startAddEmployee = (employeeData: {
  name?: string;
  gender?: string;
  salary?: number;
  dob?: number;
}) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const {
      name = "",
      gender = "",
      salary = 0,
      dob = 0
    } = employeeData;
    const employee = { name, gender, salary, dob };

    const id = uuid();

    return dispatch(
      addEmployee({
        id,
        ...employee
      })
    );
  };
};

export const startRemoveEmployee = (id: string) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(removeEmployee(id));
  };
};

export const startEditEmployee = (employee: Employee) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(editEmployee(employee));
  };
};

export const startSetEmployees = (employees: Employee[]) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(setEmployees(employees));
  };
};
