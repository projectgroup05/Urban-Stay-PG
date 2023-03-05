import { useState } from 'react';
import React from 'react'
import axios from 'axios';

export default function Address() {
    const [formData, setFormData] = useState({
        area_name: '',
        street: '',
        city: '',
        district: '',
        state: '',
        pincode: ''
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
        const tru = await axios.post("", formData);
        setFormData({
            area_name: '',
            street: '',
            city: '',
            district: '',
            state: '',
            pincode: ''
        });
    };
    return (
        <div><body>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-4 fw-dark fs-3">Add Building Location</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="area_name" name="area_name" value={formData.area_name} onChange={handleChange} required />
                                        <label htmlFor="area_name">Area Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="street" name="street" value={formData.street} onChange={handleChange} required />
                                        <label htmlFor="street">Street</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} required />
                                        <label htmlFor="city">City</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="district" name="district" value={formData.district} onChange={handleChange} required />
                                        <label htmlFor="district">District</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="state" name="state" value={formData.state} onChange={handleChange} required />
                                        <label htmlFor="address">State</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} required />
                                        <label htmlFor="pincode">Area Pincode</label>
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
        </body>
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
                            <td>{user.area_name}</td>
                            <td>{user.street}</td>
                            <td>{user.city}</td>
                            <td>{user.district}</td>
                            <td>{user.state}</td>
                            <td>{user.pincode}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
