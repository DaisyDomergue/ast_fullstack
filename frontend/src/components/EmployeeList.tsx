import React, { useState } from 'react';
import Employee from './Employee';
const EmployeeList: React.FC = () => {
    const initState = {
        employees: [
            { id: 1, fname: "Simon" },
            { id: 2, fname: "Smie" },
            { id: 3, fname: "Sami" },
            { id: 4, fname: "Samu" }
        ]
    }
    const [state, setState] = useState(initState)
    var employees = state.employees
    const handleDelete = (employeeId: number) => {
        console.log("Deleteing ", employeeId)
        employees = employees.filter(emp => emp.id !== employeeId)
        setState({ employees })
        console.log("Logging State ",initState,state,employees)
    }
    const handleAddEmployee = () => {

    }
    return (
        <div>
            <button onClick={handleAddEmployee}>Add Employee</button>
            {state.employees.map(employee => (
                <Employee
                    key={employee.id}
                    employee={employee}
                    onDelete={handleDelete}
                />
            )
            )}
        </div>

    )
}
export default EmployeeList;
