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
                    <br></br>
                    <input id='firstname' type='text' />
                    <br></br>
                </div>
                <div id="lastName">
                    <label htmlFor="lastname">LastName: </label>
                    <br></br>
                    <input id='lastname' type='text' />
                </div>

            </div>
        </>
    )
}

export default Form
