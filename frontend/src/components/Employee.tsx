import React, { useState } from 'react';
import Person from './EmployeeDef'
interface IPerson {
    employee: Person
    onDelete: (id: number) => void
}

const Employee: React.FC<IPerson> = ({ employee, onDelete }) => {
    const defaultPerson: IPerson = {
        employee,
        onDelete
        // Dob: "1994-04-15",
        // Gender: "Male",
        // Salary: 1000
    }
    const [person, setPerson] = useState(defaultPerson)

    const handleAddText = () => {
        console.log("Handling add text" + person.employee.fname)
        employee = person.employee
        console.log('logging employee', employee)
        employee.fname = employee.fname + " Alema"
        setPerson({
            employee: employee,
            onDelete
        })
    }
    return (
        <div >
            <h1>{person.employee.fname}</h1>
            <h3>{person.employee.id}</h3>
            <button onClick={handleAddText}>Edit Text</button>
            <button onClick={() => (person.onDelete(person.employee.id))}>Delete</button>
        </div>
    )
}
export default Employee;
