import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-slate-300 py-8 '>
            <footer className="mx-auto w-9/12 footer text-base-content">
                
                <div>
                    <span className="footer-title">Quick Links</span>
                    <Link className="link link-hover text-lg font-semibold" to='/'>Home</Link>
                    <Link className="link link-hover text-lg font-semibold" to='/blog'>Blog</Link>
                </div>
                <div>
                    <span className="footer-title">Social Links</span>
                    <a className="link link-hover inline-flex items-center gap-2 text-lg font-semibold"> <FaFacebook />Facebook</a>
                    <a className="link link-hover inline-flex items-center gap-2 text-lg font-semibold"><FaInstagram />Instagram</a>
                    <a className="link link-hover inline-flex items-center gap-2 text-lg font-semibold"> <FaLinkedin />LinkedIn</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-60 md:w-80 flex flex-col">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered  md:w-full pr-16" />
                            <button className="btn ml-24 rounded mt-2 bg-slate-500 ">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;