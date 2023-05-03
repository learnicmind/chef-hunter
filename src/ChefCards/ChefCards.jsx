import React from 'react';

const ChefCards = () => {
    return (
        <div className='mx-auto w-9/12 py-10'>
            <h2 className='flex justify-center items-center mb-12 text-4xl text-black font-semibold'><span className='text-gray-900 text-5xl ml-2'>O</span><span className='text-gray-700'>ur</span> <span className='text-gray-900 text-5xl ml-2'>C</span ><span className='text-gray-700'>ulinary</span> <span className='text-gray-900 text-5xl ml-1'> A</span> <span className='text-gray-700'>rtists</span></h2>
            <div className='grid md:grid-cols-2 gap-4'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img className='ml-4 rounded w-60 h-54' src="https://i.ibb.co/wwjhdKp/f2.jpg" alt="Movie" /></figure>
                    <div className="card-body text-black">
                        <h2 className="card-title">Chef's Name: </h2>
                        <p>Experience: </p>
                        <p>Number of Recipes:</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Recipies</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img className='ml-4 rounded w-60 h-54' src="https://i.ibb.co/wwjhdKp/f2.jpg" alt="Movie" /></figure>
                    <div className="card-body text-black">
                        <h2 className="card-title">Chef's Name: </h2>
                        <p>Experience: </p>
                        <p>Number of Recipes:</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Recipies</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img className='ml-4 rounded w-60 h-54' src="https://i.ibb.co/wwjhdKp/f2.jpg" alt="Movie" /></figure>
                    <div className="card-body text-black">
                        <h2 className="card-title">Chef's Name: </h2>
                        <p>Experience: </p>
                        <p>Number of Recipes:</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Recipies</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img className='ml-4 rounded w-60 h-54' src="https://i.ibb.co/wwjhdKp/f2.jpg" alt="Movie" /></figure>
                    <div className="card-body text-black">
                        <h2 className="card-title">Chef's Name: </h2>
                        <p>Experience: </p>
                        <p>Number of Recipes:</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Recipies</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCards;