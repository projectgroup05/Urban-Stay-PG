import { useState } from 'react';
import React from 'react'
import axios from 'axios';

export default function Building() {
    const [formData, setFormData] = useState({
        building_name: '',
        applicable_for: '',
        authentication: 'true'
    });

    const [users, setUsers] = useState([]);

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
        const tru = await axios.post("http://localhost:8083/building/create", formData);
        setFormData({
            building_name: '',
            applicable_for: '',
            authentication: ''
        });
    };
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-4 fw-dark fs-3">Add Building Location</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="building_name" name="building_name" value={formData.building_name} onChange={handleChange} required />
                                        <label htmlFor="building_name">Building Name</label>
                                    </div>
                                    <div className="form mb-3">
                                        <select className="form-select" aria-label="Default select example" onChange={handleChange} id="applicable_for" name="applicable_for" value={formData.applicable_for} >
                                            <option value="unisex">Unisex</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div className="form-check mb-2 ">

                                        <input type="radio" className="form-check-input" id="authenticationTrue" name="authentication" value="true" onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="authenticationTrue">Yes</label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input type="radio" className="form-check-input" id="authenticationFalse" name="authentication" value="false" onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="authenticationFalse">No</label>

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

            <table className="user-table">
                <thead>
                    <tr>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>email</th>
                        <th>phone_no</th>
                        <th>username</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.building_name}</td>
                            <td>{user.applicable_for}</td>
                            <td>{user.authentication}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}