import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {


    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleRegister = event => {
        event.preventDefault();
        setSuccess('')

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('');
                event.target.reset();
                setSuccess('user has created successfully')
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <form onSubmit={handleRegister}  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-black">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" required className="input input-bordered" />
                            <label className="label">
                                <p href="#" className="label-text-alt link link-hover">Already have an Account? <Link to='/login'>Login</Link></p>
                            </label>
                        </div>
                        <p className='text-red-500'>{error}</p>
                        <p className='text-green-700'>{success}</p>
                        <div className="form-control mt-6">
                            <button className="btn ">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;