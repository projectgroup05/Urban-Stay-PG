import { useState } from 'react';
import React from 'react'
import { loginuser } from '../services/user_services.js'
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUserDetail, isLogin } from '../common/auth/userauth';
import { doLogin } from '../common/auth/userauth';
import { doLogout } from '../common/auth/userauth'



export default function LoginPage() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''

    });
    const [fail, setFail] = useState(false);


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
        setUsers([...users, formData]);;
        try {
            let owner = await loginuser(formData)
            setFail(false);
            console.log("try");
            doLogin(owner);
            navigate('/owner/info');
        } catch {
            console.log("error");
            setFail(true);
        }
    };
    return (
        <div>
            <div className="container" style={{ marginTop: '20vh' }}>
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-4 fw-dark fs-3">Sign in </h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-4">
                                        <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} required />
                                        <label htmlFor="username">User Name</label>
                                    </div>
                                    <div className="form-floating mb-4">
                                        <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <div>
                                        {fail ?
                                            <h6 className="red-text" style={{ color: 'red' }}> wrong username or password</h6> : <h4></h4>
                                        }
                                    </div>
                                    <div className="d-grid mb-3">
                                        <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign In</button>
                                    </div>


                                </form>.
                                <div className="d-grid ">
                                    <Link to="/owner/signup"  >Create Account </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
