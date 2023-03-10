import { useState } from 'react';
import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { signupuser } from '../services/user_services'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone_no: '',
    address: '',
    username: '',
    password: '',
    role: "ROLE_ADMIN"
  });

  const navigate = useNavigate();

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

    // setFormData({
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   phone_no: '',
    //   address: '',
    //   username: '',
    //   password: ''
    // });
    try {
      let owner = await signupuser(formData)

      console.log("try");
      navigate('/owner/login');

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
                <h5 className="card-title text-center mb-4 fw-dark fs-3">Sign Up</h5>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    <label htmlFor="firstName">First Name </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    <label htmlFor="lastName">Last Name </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="phone_no" name="phone_no" value={formData.phone_no} onChange={handleChange} required />
                    <label htmlFor="phone_no">Phone Number</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required />
                    <label htmlFor="address">City Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} required />
                    <label htmlFor="username">username</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    <label htmlFor="password">Password</label>
                  </div>


                  <div className="d-grid">
                    <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign Up</button>
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

