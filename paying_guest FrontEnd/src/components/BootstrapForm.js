import { useState } from 'react';
import React from 'react'


export default function BootstrapForm() {

    const [formData, setFormData] = useState({
        name: '',
        age: ''
    });

    const [users, setUsers] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setUsers([...users, formData]);
        setFormData({
            name: '',
            age: ''
        });
    };
    return (
        <body>
            <div class="container">
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div class="card border-0 shadow rounded-3 my-5">
                            <div class="card-body p-4 p-sm-5">
                                <h5 class="card-title text-center mb-4 fw-dark fs-3">Sign Up</h5>
                                <form>

                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="age" name="age" value={formData.age} onChange={handleChange} required />
                                        <label for="age">First Name</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" />
                                        <label for="floatingInput">Last Name</label>
                                    </div>

                                    <div class="d-grid">
                                        <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>





























    )




















}
