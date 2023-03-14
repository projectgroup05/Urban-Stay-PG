import { useState } from 'react';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { saveaddress } from '../services/privateservices'

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
            area_name: '',
            street: '',
            city: '',
            district: '',
            state: '',
            pincode: ''
        });


        try {
            let address = await saveaddress(formData)
            console.log("try");
            navigate('/building/room/register');

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
        </div>
    )
}
