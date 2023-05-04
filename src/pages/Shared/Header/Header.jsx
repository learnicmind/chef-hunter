import React from 'react';
import { FaRegUserCircle, } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-slate-200'>
            <div className=''>
                <div className="navbar mx-auto md:w-9/12 text-gray-700">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to='/' className='text-2xl font-semibold'>Home</Link>

                                <Link to='/blog' className='text-2xl font-semibold'>Blog</Link>
                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost normal-case font-semibold text-xl md:text-3xl">
                        Cookz<span className='text-2xl md:text-4xl text-slate-900'>Corner</span>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal flex gap-2">
                            <Link to='/' className='text-xl font-semibold'>Home</Link>

                            <Link to='/blog' className='text-xl font-semibold'>Blog</Link>
                        </ul>
                    </div>
                    <div className="navbar-end flex items-center gap-2">
                        <FaRegUserCircle style={{ fontSize: '2rem' }} />
                        <Link to='/login'><button className="btn">Login</button></Link>
                        <button className="btn">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;