import React from "react";
import { connect } from "react-redux";
import { startRemoveEmployee, startEditEmployee } from "../actions/employee";
import { Employee } from "../types/Employee";
import { AppState } from "../store/configureStore";
import { Dispatch, bindActionCreators } from "redux";
import { AppActions } from "../types/actions";
import { ThunkDispatch } from "redux-thunk";

interface HomePageProps {
  id?: string;
  color?: string;
}

interface HomePageState {}

type Props = HomePageProps & LinkStateProps & LinkDispatchProps;

export class HomePagePage extends React.Component<Props, HomePageState> {
  onEdit = (employee: Employee) => {
    this.props.startEditEmployee(employee);
  };
  onRemove = (id: string) => {
    this.props.startRemoveEmployee(id);
  };
  render() {
    const { employees } = this.props;
    return (
      <div>
        <h1>Employee Page</h1>
        <div>
          {employees.map(employee => (
            <div>
              <p>{employee.name}</p>
              <p>{employee.salary}</p>
              <p>{employee.gender}</p>
              <button onClick={() => this.onRemove(employee.id)}>
                Remove Employee
              </button>
              <button onClick={() => this.onEdit(employee)}>Edit Employee</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

interface LinkStateProps {
  employees: Employee[];
}
interface LinkDispatchProps {
  startEditEmployee: (employee: Employee) => void;
  startRemoveEmployee: (id: string) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: HomePageProps
): LinkStateProps => ({
  employees: state.employees
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: HomePageProps
): LinkDispatchProps => ({
  startEditEmployee: bindActionCreators(startEditEmployee, dispatch),
  startRemoveEmployee: bindActionCreators(startRemoveEmployee, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePagePage);
