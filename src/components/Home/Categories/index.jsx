import React from 'react';
import Brands from './Brands';
import Offers from './Offers';
import TopCategories from './TopCategories';

const Categories = () => {
    return (
        <div className='container mx-auto'>
            <Offers></Offers>
            <TopCategories></TopCategories>
            <Brands></Brands>
        </div>
    );
};

export default Categories;