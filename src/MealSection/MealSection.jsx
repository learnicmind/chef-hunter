import React from 'react';

const MealSection = () => {
    return (
        <section className="py-8 lg:py-16 w-9/12 mx-auto">
            <h2 className='text-center text-4xl font-bold text-gray-800 md:pb-10'>A Culture of Collaboration: How We Work</h2>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <img src='https://i.ibb.co/3STyv5f/c3.jpg' alt="Delicious meal" className="w-full h-full object-cover rounded-lg shadow-lg" />
                </div>
                <div className="lg:w-1/2 lg:pl-8 flex flex-col justify-center">
                    <h2 className="text-4xl text-gray-800 font-bold mb-4">How we work as a team</h2>
                    <p className="text-gray-700 text-lg mb-6">
                    At CookzCorner, we're a team of food enthusiasts who are committed to delivering the best possible experience for our users. We believe that teamwork is key to achieving our goals, and here's how we work together:
                    We prioritize open communication and collaboration, working closely together to create and share ideas. Our team is constantly learning and growing, seeking out new ways to improve our website and user experience. We encourage creativity and innovation, exploring new ideas and approaches to make CookzCorner stand out.

                    </p>
                    
                </div>
            </div>
        </section>
    );
};

export default MealSection;
