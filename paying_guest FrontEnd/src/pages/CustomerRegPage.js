import { useState } from 'react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Customer() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
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

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setUsers([...users, formData]);

        setFormData({
            first_name: '',
            last_name: '',
            email_id: '',
            phone_no: '',
            gender: '',
            occupation: '',
            police_verification: ''
        });
        navigate('/buildingcards');

    };
    return (
        <div>
            <div className="container" style={{ marginTop: '20vh' }}>
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-4 fw-dark fs-3">Customer Form</h5>
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
                                        <input type="text" className="form-control" id="email_id" name="email_id" value={formData.email_id} onChange={handleChange} required />
                                        <label htmlFor="email_id">Email Id</label>
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

                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} required />
                                        <label htmlFor="occupation">Occupation</label>
                                    </div>
                                    <div><label className="form-check-label" > * Police_verification</label></div>
                                    <div className="form-check mb-2 ">

                                        <input type="radio" className="form-check-input" id="police_verification" name="police_verification" value="true" onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="police_verification">Yes</label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input type="radio" className="form-check-input" id="police_verification" name="police_verification" value="false" onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="police_verification">No</label>

                                    </div>
                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Create</button>
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
