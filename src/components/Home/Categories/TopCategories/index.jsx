import React from 'react';
import TopCateCarousel from './TopCateCarousel';
const TopCategories = () => {
    return (
        <div className='container mb-32 overflow-hidden'>
            <h2 className='text-2xl b text-slate-500 font-bold'>Shop from</h2>
            <TopCateCarousel></TopCateCarousel>
        </div>
    );
};

export default TopCategories;