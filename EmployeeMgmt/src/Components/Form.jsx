import React from 'react'
import './form.css'

function Form() {
    return (
        <>
            {/* <div id="search-bar">
                <input id="emp-search" placeholder='Search' />
                <button id="search">🔍</button>
            </div>*/}

            <div id="form-components">
                <div id="firstName">
                    <label htmlFor='firstname'>FirstName: </label>
                    <input id='firstname' type='text' />

                </div>
                <div id="lastName">
                    <label htmlFor="lastname">LastName: </label>
                    <input id='lastname' type='text' />
                </div>

                <div id="email">
                    <label htmlFor='email'>Email: </label>
                    <input id='email' type='email' />
                </div>

                <div id="department">
                    <label htmlFor='department'>Deparment: </label>
                    <input id='department' type='email' />
                </div>

                <div id="salary">
                    <label htmlFor='salary'>Salary: </label>
                    <input id='salary' type='text' />
                </div>

                <div id="button">
                    <button id="btn-submit"> SUBMIT </button>
                </div>




            </div>
        </>
    )
}

export default Form
