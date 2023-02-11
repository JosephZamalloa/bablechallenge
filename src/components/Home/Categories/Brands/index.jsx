import React from "react";
import BrandsCarousel from "./BrandsCarousel";
const Brands = () => {
  return (
    <div className="container mb-32 overflow-hidden">
      <div className="flex justify-between">
        <div>
          <span className="text-2xl b text-slate-500 font-bold flex gap-2">
            Top
            <span className="text-[#008ECC]">Brands</span>
          </span>
        </div>
        <div>
          <h4>View All</h4>
        </div>
      </div>
   <BrandsCarousel></BrandsCarousel>
    </div>
  );
};

export default Brands;
