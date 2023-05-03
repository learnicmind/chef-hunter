import React from 'react';


const Banner = () => {
    return (

        <div className=" py-4">
            <div className="relative">
                <img src="https://i.ibb.co/wwjhdKp/f2.jpg" alt="Your image" className="w-full h-screen object-cover" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="text-5xl  font-semibold animate-pulse">
                        <span className="text-slate-300 mb-2">Taste the Richness of </span> Bangladesh: <br />
                        <span className="text-slate-400"> A Gastronomic Adventure</span>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Banner;