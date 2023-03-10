import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function OwnerInfo() {


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-4 fw-dark fs-3">Owner Info</h5>

                                <div className="d-grid ">
                                    <Link to="/building/register"><h2>Add Building</h2></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
