import React from 'react'
import './employee.css'

function EmployeeTable() {
    return (
        <>
            <table id="emp_table">
                <tr>
                    <th> First Name </th>
                    <th> Last Name </th>
                    <th> Email </th>
                    <th> Department </th>
                    <th> Salary </th>
                </tr>

            </table>
        </>
    )
}

export default EmployeeTable

