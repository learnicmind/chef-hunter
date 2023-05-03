import React from 'react';

const Footer = () => {
    return (
        <div className='bg-slate-200 '>
            <footer className="mx-auto w-9/12 footer p-10 text-base-content">
                
                <div>
                    <span className="footer-title">Quick Links</span>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Blogs</a>
                </div>
                <div>
                    <span className="footer-title">Social Links</span>
                    <a className="link link-hover" href='https://web.facebook.com/ariful.islam5566/'>Facebook</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">LinkedIn</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none bg-slate-500">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;