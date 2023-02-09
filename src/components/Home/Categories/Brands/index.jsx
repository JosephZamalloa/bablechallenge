import React from 'react';
import BrandsCarousel from './BrandsCarousel';
const Brands = () => {
    return (
        <div className='container mb-32 '>
            <h2 className='text-2xl b text-slate-500 font-bold'>Top</h2>
        <BrandsCarousel></BrandsCarousel>
    </div>
    );
};

export default Brands;