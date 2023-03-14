import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { addbuilding } from '../services/privateservices'
import React from 'react'
import axios from 'axios';

export default function Building() {
    const [formData, setFormData] = useState({
        building_name: '',
        applicable_for: 'male',
        authentication: 'true'
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
            building_name: '',
            applicable_for: '',
            authentication: ''
        });

        try {
            let building = await addbuilding(formData);
            const building_Id = building.data;
            console.log("try");
            localStorage.setItem("building_Id", building_Id);
            navigate('/building/address');

        }
        catch {
            console.log("error");

        }

    };
    return (
        <div>
            <div className="container" style={{ marginTop: '20vh' }}>
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-4 fw-dark fs-3">Building Description</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="building_name" name="building_name" value={formData.building_name} onChange={handleChange} required />
                                        <label htmlFor="building_name">Building Name</label>
                                    </div>
                                    <div>
                                        <label style={{ float: 'left', color: "grey" }} htmlFor="building_name"><strong>Applicable for</strong></label>
                                        <br />
                                    </div>

                                    <div className="form mb-3">
                                        <select className="form-select" aria-label="Default select example" onChange={handleChange} id="applicable_for" name="applicable_for" value={formData.applicable_for} >
                                            <option defaultValue="" disabled="disabled"  >Applicable for</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="unisex">Both</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label style={{ float: 'left', color: "grey" }} htmlFor="building_name"><strong>Police Authenticated</strong></label>
                                        <br />
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

        </div>
    )
}
