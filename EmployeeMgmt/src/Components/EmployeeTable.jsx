import React, { useState } from 'react'
import './employee.css'

function EmployeeTable({ employees }) {

    const [search, setSearch] = useState('')

    const filterEmployees = employees.filter((emp) =>
        emp.firstName.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <div id="search-bar">
                <input id="emp-search" placeholder='Search' value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                <button id="search">🔍</button>
            </div>

            <table id="emp_table" border={1}>
                <thead>
                    <tr>
                        <th> First Name </th>
                        <th> Last Name </th>
                        <th> Email </th>
                        <th> Department </th>
                        <th> Salary </th>
                    </tr>
                </thead>

                <tbody>
                    {filterEmployees.map((emp, index) => (
                        <tr key={index}>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.email}</td>
                            <td>{emp.department}</td>
                            <td>{emp.salary}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </>
    )
}

export default EmployeeTable

