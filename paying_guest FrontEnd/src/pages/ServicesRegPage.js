import { useState } from 'react';
import React from 'react'
import { servicesadd } from '../services/privateservices';
import { Link, useNavigate } from 'react-router-dom'

export default function ServicesRegPage() {
    const [formData, setFormData] = useState({
        ac_room: 'false',
        no_ac_room: 'false',
        wifi: 'false',
        water_purifier: 'false',
        refrigerator: 'false',
        washing_machine: 'false',
        food_facility: 'false',
        sports: 'false',
        gym: 'false',
        parking: 'false'
    });

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();


    const handleChange = (event) => {
        let { name, value } = event.target
        console.log(value)
        if (value == 'false') { value = 'true' }
        else (value = 'false')
        console.log(value)
        setFormData({
            ...formData,
            [name]: value

        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setUsers([...users, formData]);

        setFormData({
            ac_room: '',
            no_ac_room: '',
            wifi: '',
            water_purifier: '',
            refrigerator: '',
            washing_machine: '',
            food_facility: '',
            sports: '',
            gym: '',
            parking: '',

        });

        try {
            let owner = await servicesadd(formData)
            console.log("try");
            navigate('/building/manager/info');
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
                                <h5 className="card-title text-center mb-4 fw-dark fs-3">Building Services</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-check form-switch mb-3">
                                        <input className="form-check-input" type="checkbox" id="ac_room" name="ac_room" value={formData.ac_room} onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="ac_room">Ac Rooms </label>
                                    </div>
                                    <div className="form-check form-switch mb-3">
                                        <input className="form-check-input" type="checkbox" id="no_ac_room" name="no_ac_room" value={formData.no_ac_room} onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="no_ac_room">Non Ac Rooms </label>
                                    </div>
                                    <div className="form-check form-switch mb-3">
                                        <input className="form-check-input" type="checkbox" id="wifi" name="wifi" value={formData.wifi} onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="wifi">Wifi</label>
                                    </div>
                                    <div className="form-check form-switch mb-3">
                                        <input className="form-check-input" type="checkbox" id="water_purifier" name="water_purifier" value={formData.water_purifier} onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="water_purifier">Water Purification</label>
                                    </div>
                                    <div className="form-check form-switch mb-3">
                                        <input className="form-check-input" type="checkbox" id="refrigerator" name="refrigerator" value={formData.refrigerator} onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="refrigerator">Refrigerator </label>
                                    </div>
                                    <div className="form-check form-switch mb-3">
                                        <input className="form-check-input" type="checkbox" id="washing_machine" name="washing_machine" value={formData.washing_machine} onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="washing_machine">Washing Machine</label>
                                    </div>
                                    <div className="form-check form-switch mb-3">
                                        <input className="form-check-input" type="checkbox" id="food_facility" name="food_facility" value={formData.food_facility} onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="food_facility">Food Facility</label>
                                    </div>
                                    <div className="form-check form-switch mb-3">
                                        <input className="form-check-input" type="checkbox" id="sports" name="sports" value={formData.sports} onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="sports">Sports</label>
                                    </div>
                                    <div className="form-check form-switch mb-3">
                                        <input className="form-check-input" type="checkbox" id="gym" name="gym" value={formData.gym} onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="gym">GYM</label>
                                    </div>
                                    <div className="form-check form-switch mb-3">
                                        <input className="form-check-input" type="checkbox" id="parking" name="parking" value={formData.parking} onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="parking">Parking</label>
                                    </div>


                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Submit Services</button>
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


