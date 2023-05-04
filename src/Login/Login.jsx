import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    console.log(loginUser);
    const navigate = useNavigate();
    let location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSignIn = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-black">
                        <form onSubmit={handleSignIn} className="card-body">
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
                        </form>
                    </div>


                </div>

            </div>
            <div className='pb-10 bg-base-200 flex items-center justify-center'>
                <div className='block'>
                    <button className="btn btn-wide flex gap-2 "> <FaGoogle className='text-lg' />Login with Google</button>
                    <br />
                    <button className="btn btn-wide flex gap-2"><FaGithub className='text-lg' />Login with Github</button>
                </div>
            </div>
        </div>
    );
};

export default Login;