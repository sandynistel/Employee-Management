import React, { useState } from 'react'
import './form.css'

function Form({ addEmployee }) {

    const [FormData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: '',
        salary: ''
    })

    const formValue = (e) => {
        setFormData({ ...FormData, [e.target.id]: e.target.value });
    }

    const buttonSubmit = (e) => {
        e.preventDefault()
        addEmployee(FormData)

        //clear the form after submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            department: '',
            salary: ''
        })
    }



    return (
        <>

            <form onSubmit={buttonSubmit} id="employeeForm">
                <div id="form-components">
                    <div id="firstName">
                        <label htmlFor='firstname'>First Name: </label>
                        <input id='firstName' type='text' value={FormData.firstName} onChange={formValue} />

                    </div>
                    <div id="lastName">
                        <label htmlFor="lastname">Last Name: </label>
                        <input id='lastName' type='text' value={FormData.lastName} onChange={formValue} />
                    </div>

                    <div id="email">
                        <label htmlFor='email'>Email: </label>
                        <input id='email' type='email' value={FormData.email} onChange={formValue} />
                    </div>

                    <div id="department">
                        <label htmlFor='department'>Deparment: </label>
                        <input id='department' type='text' value={FormData.department} onChange={formValue} />
                    </div>

                    <div id="salary">
                        <label htmlFor='salary'>Salary: </label>
                        <input id='salary' type='text' value={FormData.salary} onChange={formValue} />
                    </div>

                    <div id="button">
                        <button id="btn-submit" type='submit'> SUBMIT </button>
                    </div>

                </div>

            </form>
        </>
    )
}

export default Form
