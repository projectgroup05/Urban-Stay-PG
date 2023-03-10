import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import axios from 'axios';

export default function Building() {
    const [formData, setFormData] = useState({
        rent: '',
        sharing: '1',
        availble_bed: '',
        status: '',
        deposite: '',
        contract: '',
        notice_period: ''
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
            rent: '',
            sharing: '1',
            availble_bed: '',
            status: '',
            deposite: '',
            contract: '',
            notice_period: ''
        });

        navigate('/building/services/register');

    };
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-4 fw-dark fs-3">Room Description</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="form mb-3">
                                        <div className="form-floating mb-3">
                                            <input type="number" className="form-control" id="rent" name="rent" value={formData.rent} onChange={handleChange} required />
                                            <label htmlFor="rent">Room Rent</label>
                                        </div>
                                        <div className="form-floating mb-3"> <b>Sharing</b></div>
                                        <select className="form-select" aria-label="Default select example" onChange={handleChange} id="sharing" name="sharing"  >
                                            <option value='1'>Single </option>
                                            <option value='2'>Two Sharing</option>
                                            <option value='3'>Three Sharing</option>
                                        </select>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" id="availble_bed" name="availble_bed" value={formData.availble_bed} onChange={handleChange} required />
                                        <label htmlFor="availble_bed">Availabe Bed</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" id="deposite" name="deposite" value={formData.deposite} onChange={handleChange} required />
                                        <label htmlFor="deposite">Deposite</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" id="contract" name="contract" value={formData.contract} onChange={handleChange} required />
                                        <label htmlFor="contract">Minimum Contract in Month</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" id="notice_period" name="notice_period" value={formData.notice_period} onChange={handleChange} required />
                                        <label htmlFor="notice_period">Notice Period in Month</label>
                                    </div>
                                    <div className="form-floating mb-2"><b> Status Of Room </b> </div>
                                    <div className="form-check mb-2">
                                        <input type="radio" className="form-check-input" id="status" name="status" value="true" onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="status">Available</label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input type="radio" className="form-check-input" id="status" name="status" value="false" onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="status">Not Available</label>
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
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card border-0 shadow rounded-3 my-5">
                                <div className="card-body p-4 p-sm-5">
                                    <h5 className="card-title text-center mb-4 fw-dark fs-3">Typs Of Bed</h5>

                                    <table className="user-table">
                                        <thead>
                                            <tr>
                                                <th>rent</th>
                                                <th>sharing</th>
                                                <th>availble_bed</th>
                                                <th>deposite</th>
                                                <th>contract</th>
                                                <th>notice_period</th>
                                                <th>status</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((user, index) => (
                                                <tr key={index}>

                                                    <td>{user.rent}</td>
                                                    <td>{user.sharing}</td>
                                                    <td>{user.availble_bed}</td>

                                                    <td>{user.deposite}</td>
                                                    <td>{user.contract}</td>
                                                    <td>{user.notice_period}</td>
                                                    <td>{user.status}</td>

                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

