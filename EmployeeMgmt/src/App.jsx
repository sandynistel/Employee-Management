import React, { useState } from 'react'
import Navabr from './Components/navabr'
import Form from './Components/form'
import EmployeeTable from './Components/EmployeeTable'

function App() {
  const [employees, setEmployees] = useState([])

  const addEmployee = (emp) => {
    setEmployees([...employees, emp])
  }

  return (
    <>
      <Navabr />
      <br></br>
      <Form addEmployee={addEmployee} />
      <EmployeeTable employees={employees} />
    </>
  )
}

export default App
