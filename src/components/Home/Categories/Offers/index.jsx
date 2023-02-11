import React from 'react';
import OfferCarousel from './OfferCarousel';
const Offers = () => {
    return (
        <div className='container mb-32 relative'>
            <span className='text-2xl b text-slate-500 font-bold flex gap-2'>Grab the best deal on
            <span className="text-[#008ECC]">Smartphones</span>
            </span>
            <OfferCarousel></OfferCarousel>
        </div>
    );
};

export default Offers;