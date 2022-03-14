import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/Login.css';

const Register = () =>{
    return (
        <div className="flex-row align-items-center">
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <div className="card-body">
                                <h4>
                                    Halaman Register
                                </h4>
                                <div className="form-group mt-4">
                                    <label>Name</label>
                                    <input placeholder="Name" className="form-control" />
                                </div>

                                <div className="form-group mt-4">
                                    <label>Username</label>
                                    <input placeholder="Username" className="form-control" />
                                </div>

                                <div className="form-group mt-4">
                                    <label>Number Phone</label>
                                    <input placeholder="NumberPhone" className="form-control" />
                                </div>

                                <div className="form-group mt-4">
                                    <label>Address</label>
                                    <input placeholder="Address" className="form-control" />
                                </div>

                                <div className="form-group mt-4">
                                    <label>Password</label>
                                    <input placeholder="Password" className="form-control" />
                                </div>

                                <div className="form-group mt-4">
                                    <label>Confirm Password</label>
                                    <input placeholder="ConfirmPassword" className="form-control" />
                                </div>

                                <button className="btn btn-primary mt-4">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;