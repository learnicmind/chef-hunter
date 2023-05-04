import React from 'react';

const DonationSection = () => {
    return (
        <section className=" py-12 lg:py-24 bg-slate-200 w-9/12 mx-auto">
            <h2 className='text-center text-4xl font-bold text-gray-800 md:pb-10'>Our Commitment to Reducing Food Insecurity</h2>
            <div className="grid md:grid-cols-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img src='https://i.ibb.co/fY2FCWm/f2.jpg' alt="Donating food" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    <img src='https://i.ibb.co/C9mtbbx/f3.jpg' alt="Donating food" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    <img src='https://i.ibb.co/68qxmXj/f5.jpg' alt="Donating food" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    <img src='https://i.ibb.co/fY2FCWm/f2.jpg' alt="Donating food" className="w-full h-full object-cover rounded-lg shadow-lg" />
                </div>
                <div className='flex items-center px-4 py-4'>

                    <p className="text-gray-700 text-lg md:mb-6 text-center">
                        <p className='text-3xl font-bold text-gray-800 pb-6'>Fighting Hunger Together</p>
                        At CookzCorner, we believe that everyone should have access to nutritious food. That's why we partner with local food banks and organizations to donate food to those in need. We're committed to reducing food waste and helping to ensure that no one goes hungry.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default DonationSection;
