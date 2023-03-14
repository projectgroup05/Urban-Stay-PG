import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUserDetail } from '../common/auth/userauth';
import { ownerbuilding } from '../services/privateservices';
import { myAxios } from '../common/constant/constants';
import './table.css';

export default function OwnerInfo() {
    const [buildings, setBuildings] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await ownerbuilding();
                setBuildings(response.data);
            } catch {
                console.log('error');
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <div className="container" style={{ marginTop: '20vh' }}>
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-4 fw-dark fs-3">Welcome {localStorage.getItem('firstname')}</h5>

                                <div className="d-grid ">
                                    <Link to="/building/register"><h2>Add Building</h2></Link>
                                </div>

                                <table>
                                    <thead>
                                        <tr>

                                            <th>Last Name</th>
                                            <th>Role</th>
                                            <th>Building ID</th>
                                            <th>USERNAME</th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        <td>{localStorage.getItem('lastname')}</td>
                                        <td>{localStorage.getItem('role')}</td>
                                        <td>{localStorage.getItem('building_Id')}</td>
                                        <td>{localStorage.getItem('username')}</td>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
