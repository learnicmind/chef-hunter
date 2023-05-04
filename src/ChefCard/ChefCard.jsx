import React from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    console.log(chef);
    const { chef_name, chef_img, experience, likes, total_recipe} = chef;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='ml-4 w-60 h-full p-4' src={chef_img} alt="Movie" /></figure>
            <div className="card-body text-black">
                <h2 className="card-title">Chef's Name: {chef_name}</h2>
                <p>Experience: {experience}</p>
                <p>Number of Recipes: {total_recipe}</p>
                <p className='inline-flex items-center gap-1'><FaRegThumbsUp /> {likes}</p>
                <div className="card-actions justify-end">
                    <Link to={`/chef/${chef.id}`}><button className="btn btn-primary">View Recipies</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;