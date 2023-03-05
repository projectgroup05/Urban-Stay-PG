import { useState } from 'react';
import React from 'react'
import axios from 'axios';

export default function Customer() {
    const [formData, setFormData] = useState({
        customer_name: '',
        email_id: '',
        phone_no: '',
        occupation: '',
        police_verification: ''
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
            customer_name: '',
            email_id: '',
            phone_no: '',
            occupation: '',
            police_verification: ''
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
                                        <input type="text" className="form-control" id="customer_name" name="customer_name" value={formData.customer_name} onChange={handleChange} required />
                                        <label htmlFor="customer_name">Customer FirstName</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="email_id" name="email_id" value={formData.email_id} onChange={handleChange} required />
                                        <label htmlFor="email_id">Email Id</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="customer_name" name="customer_name" value={formData.customer_name} onChange={handleChange} required />
                                        <label htmlFor="customer_name">Building Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="customer_name" name="customer_name" value={formData.customer_name} onChange={handleChange} required />
                                        <label htmlFor="customer_name">Building Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="customer_name" name="customer_name" value={formData.customer_name} onChange={handleChange} required />
                                        <label htmlFor="customer_name">Building Name</label>
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
