import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import axios from 'axios';
import { addmanager } from '../services/privateservices'

export default function Customer() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        manager_email: '',
        phone_no: '',
        gender: 'male'
    });

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value

        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setUsers([...users, formData]);

        setFormData({
            first_name: '',
            last_name: '',
            manager_email: '',
            phone_no: '',
            gender: ''
        });


        try {
            let owner = await addmanager(formData)
            console.log("try");
            navigate('/owner/info');

        }
        catch {
            console.log("error");

        }
    };
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-4 fw-dark fs-3">Manager Data</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} required />
                                        <label htmlFor="first_name">First Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} required />
                                        <label htmlFor="last_name">Last Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="manager_email" name="manager_email" value={formData.manager_email} onChange={handleChange} required />
                                        <label htmlFor="manager_email">Email Id</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" id="phone_no" name="phone_no" value={formData.phone_no} onChange={handleChange} required />
                                        <label htmlFor="phone_no">Phone Number</label>
                                    </div>
                                    <div className="form mb-3">
                                        <select className="form-select" aria-label="Default select example" onChange={handleChange} id="gender" name="gender" value={formData.gender} required >
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>

                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Next</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
