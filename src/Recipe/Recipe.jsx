import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaHeart, FaThumbsUp } from 'react-icons/fa';
import Recipe1 from './Recipe1';
import Recipe2 from './Recipe2';
import Recipe3 from './Recipe3';

const Recipe = () => {

    const recipes = useLoaderData();
    const { chef_name, experience, likes, total_recipe, recipe, banner_image, chef_bio } = recipes;

    return (
        <div className='text-black w-9/12  mx-auto grid grid-cols-12 gap-5 px-4 py-20 bg-gray-200'>
            <div className='col-start-1 col-end-10'>
                <img className='w-full rounded' src={banner_image} alt="" />
                <p className='text-xl font-bold'>{chef_name}</p>
                <p className='pt-2'>{chef_bio}</p>
                <div className='flex justify-between  pt-4 '>
                    <p className='text-lg'>Number Of Recipies: {total_recipe}</p>
                    <p className='text-lg pt-1'>Experience : {experience} Years</p>
                </div>
                <div className='flex justify-between '>
                    <p className='flex items-center gap-2 '><FaThumbsUp className='text-blue-700' /> {likes}</p>
                    <p className='flex items-center gap-2 pt-1 '> <FaHeart className='text-red-700' /> Add to Favorite </p>
                </div>
            </div>

            <div className='col-start-10 col-end-13 flex flex-col gap-2'>
                <h2 className='text-2xl font-bold'>Recipies by this Chef</h2>
                <div className='border rounded border-black'>
                    <h2 className='text-lg font-semibold p-3'>{recipe.recipe_1.name}</h2>
                    {
                        recipe.recipe_1.ingredients.map(ingredient => {
                            return <Recipe1
                                ingredient={ingredient}
                            ></Recipe1>
                        })
                    }

                </div>
                <div className='border rounded border-black'>
                    <h2 className='text-lg font-semibold p-3'>{recipe.recipe_2.name}</h2>

                    {
                        recipe.recipe_2.ingredients.map(ingredient => {
                            return <Recipe2
                                ingredient={ingredient}
                            ></Recipe2>
                        })
                    }
                </div>
                <div className='border rounded border-black'>
                    <h2 className='text-lg font-semibold p-3'>{recipe.recipe_3.name}</h2>

                    {
                        recipe.recipe_3.ingredients.map(ingredient => {
                            return <Recipe3
                                ingredient={ingredient}
                            ></Recipe3>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Recipe;