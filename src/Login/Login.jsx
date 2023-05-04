import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Don't have an account? <Link to='/register'>Register</Link></a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn ">Login</button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <div className='pb-10 bg-base-200 flex items-center justify-center'>
                <div className='block'>
                <button className="btn btn-wide flex gap-2 "> <FaGoogle className='text-lg'  />Login with Google</button>
                <br />
                <button className="btn btn-wide flex gap-2"><FaGithub className='text-lg' />Login with Github</button>
                </div>
            </div>
        </div>
    );
};

export default Login;