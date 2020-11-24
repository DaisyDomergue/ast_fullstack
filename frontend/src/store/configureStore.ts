import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { employeeReducer } from "../reducers/employees";
import { AppActions } from "../types/actions";

export const rootReducer = combineReducers({
  employees: employeeReducer
});

export type AppState = ReturnType<typeof rootReducer>;

// export const store = createStore(
//   rootReducer, /* preloadedState, */
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);
