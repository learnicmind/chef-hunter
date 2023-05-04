
import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const ChefCards = () => {

    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefdetails')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => {
            console.log(error)
        })
    }, [])


    return (
        <div className='mx-auto w-9/12 py-10'>
            <h2 className='flex justify-center items-center mb-12 text-4xl text-black font-semibold'><span className='text-gray-900 text-5xl ml-2'>O</span><span className='text-gray-700'>ur</span> <span className='text-gray-900 text-5xl ml-2'>C</span ><span className='text-gray-700'>ulinary</span> <span className='text-gray-900 text-5xl ml-1'> A</span> <span className='text-gray-700'>rtists</span></h2>
            <div className='grid md:grid-cols-2 gap-4'>
                

                {
                    chefs.map(chef =>{
                        return <ChefCard key={chef.id} chef={chef}></ChefCard>
                    })
                }
                
                
                
            </div>
        </div>
    );
};

export default ChefCards;