import React from 'react';
import Banner from '../../../Banner/Banner';
import ChefCards from '../../../ChefCards/ChefCards';
import MealSection from '../../../MealSection/MealSection';
import DonationSection from '../../../DonateSection/DonateSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefCards></ChefCards>
            <MealSection></MealSection>
            <DonationSection></DonationSection>
        </div>
    );
};

export default Home;