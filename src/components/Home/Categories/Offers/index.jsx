import React from 'react';
import OfferCarousel from './OfferCarousel';
const Offers = () => {
    return (
        <div className='container mb-32 relative'>
            <h2 className='text-2xl b text-slate-500 font-bold'>Grab the best deal on</h2>
            <OfferCarousel></OfferCarousel>
        </div>
    );
};

export default Offers;