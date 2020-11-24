import { Employee } from "./Employee";

// action strings
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const EDIT_EMPLOYEE = "EDIT_EMPLOYEE";
export const REMOVE_EMPLOYEE = "REMOVE_EMPLOYEE";
export const SET_EMPLOYEE = "SET_EMPLOYEE";

export interface SetEmployeeAction {
  type: typeof SET_EMPLOYEE;
  employees: Employee[];
}

export interface EditEmployeeAction {
  type: typeof EDIT_EMPLOYEE;
  employee: Employee;
}

export interface RemoveEmployeeAction {
  type: typeof REMOVE_EMPLOYEE;
  id: string;
}

export interface AddEmployeeAction {
  type: typeof ADD_EMPLOYEE;
  employee: Employee;
}

export type EmployeeActionTypes =
  | SetEmployeeAction
  | EditEmployeeAction
  | RemoveEmployeeAction
  | AddEmployeeAction;

export type AppActions = EmployeeActionTypes;
