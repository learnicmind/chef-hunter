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
        <div className='text-black w-9/12  mx-auto px-4 py-20 bg-gray-200'>
            <div className='col-start-1 col-end-10'>
                <img className='w-full rounded' src={banner_image} alt="" />
                <p className='text-xl font-bold'>{chef_name}</p>
                <p className='pt-2'>{chef_bio}</p>
                <div className='flex justify-between  pt-4 '>
                    <p className='text-lg'>Number Of Recipies: {total_recipe}</p>
                    <p className='text-lg pt-1'>Experience : {experience} Years</p>
                </div>
                <div className=' '>
                    <p className='flex items-center gap-2 '><FaThumbsUp className='text-blue-700' /> {likes}</p>
                    
                </div>
            </div>

            <div className=''>
                <h2 className='text-center text-2xl font-bold'>Recipies by this Chef</h2>
                <div className='my-8 shadow-xl'>
                    <h2 className='text-xl border-y rounded text-center font-semibold p-3'>{recipe.recipe_1.name}</h2>

                    <div className='grid grid-cols-12 gap-5 m-5 pb-5 rounded-xl'>
                        <div className='col-start-1 col-end-5'>
                            <img className='h-full w-full rounded-lg' src={recipe.recipe_1.food_img} alt="" />
                        </div>

                        <div className='col-start-5 col-end-10'>
                            <h2 className='text-lg font-semibold'>Cooking Method</h2>
                            <p>{recipe.recipe_1.method}</p>
                        </div>

                        <div className='col-start-10 col-end-13'>
                            <h2 className='text-lg font-semibold'>Ingredients</h2>
                            {
                                recipe.recipe_1.ingredients.map(ingredient => {
                                    return <Recipe1 key={recipe.recipe_1.id} ingredient={ingredient}></Recipe1>
                                })
                            }
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <button className='flex items-center gap-2 mb-10 border py-2 px-3 rounded'><FaHeart className='text-2xl' />Add to Favorite</button>
                    </div>
                </div>


                <div className='my-8 shadow-xl'>
                    <h2 className='text-xl border-y rounded text-center font-semibold p-3'>{recipe.recipe_2.name}</h2>

                    <div className='grid grid-cols-12 gap-5 m-5 pb-5 rounded-xl'>
                        <div className='col-start-1 col-end-5'>
                            <img className='h-full w-full rounded-lg' src={recipe.recipe_2.food_img} alt="" />
                        </div>

                        <div className='col-start-5 col-end-10'>
                            <h2 className='text-lg font-semibold'>Cooking Method</h2>
                            <p>{recipe.recipe_2.method}</p>
                        </div>

                        <div className='col-start-10 col-end-13'>
                            <h2 className='text-lg font-semibold'>Ingredients</h2>
                            {
                                recipe.recipe_2.ingredients.map(ingredient => {
                                    return <Recipe2 key={recipe.recipe_2.id} ingredient={ingredient}></Recipe2>
                                })
                            }
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <button className='flex items-center gap-2 mb-10 border py-2 px-3 rounded'><FaHeart className='text-2xl' />Add to Favorite</button>
                    </div>
                </div>


                <div className='my-8 shadow-xl'>
                    <h2 className='text-xl border-y rounded text-center font-semibold p-3'>{recipe.recipe_3.name}</h2>

                    <div className='grid grid-cols-12 gap-5 m-5 pb-5 rounded-xl'>
                        <div className='col-start-1 col-end-5'>
                            <img className='h-full w-full rounded-lg' src={recipe.recipe_3.food_img} alt="" />
                        </div>

                        <div className='col-start-5 col-end-10'>
                            <h2 className='text-lg font-semibold'>Cooking Method</h2>
                            <p>{recipe.recipe_3.method}</p>
                        </div>

                        <div className='col-start-10 col-end-13'>
                            <h2 className='text-lg font-semibold'>Ingredients</h2>
                            {
                                recipe.recipe_3.ingredients.map(ingredient => {
                                    return <Recipe3 key={recipe.recipe_1.id} ingredient={ingredient}></Recipe3>
                                })
                            }
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <button className='flex items-center gap-2 mb-10 border py-2 px-3 rounded'><FaHeart className='text-2xl' />Add to Favorite</button>
                    </div>
                </div>



                
            </div>
        </div>
    );
};

export default Recipe;