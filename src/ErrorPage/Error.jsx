import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='w-9/12 mx-auto flex flex-col items-center justify-center my-36'>
            <img src="https://media.istockphoto.com/id/1153372686/photo/404-error-page-not-found.jpg?b=1&s=170667a&w=0&k=20&c=yAVb0dfxHGQooo1-kmjyGnM5SY22TE82x34IfHFfhLI=" alt="" />
            <h1 className='text-5xl font-semibold text-purple-800  my-4'>Oops! You seem to be lost!</h1>

            <Link to='/'><button className='btn'>Go Back</button></Link>
            
        </div>
    );
};

export default Error;