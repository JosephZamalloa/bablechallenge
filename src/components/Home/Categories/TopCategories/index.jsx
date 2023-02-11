import React from "react";
import TopCateCarousel from "./TopCateCarousel";
const TopCategories = () => {
  return (
    <div className="container mb-32 overflow-hidden ">
      <span className="text-2xl text-slate-500 font-bold flex gap-2">
        Shop from 
        <span className="text-[#008ECC]">Top Categories</span>
      </span>
      <TopCateCarousel></TopCateCarousel>
    </div>
  );
};

export default TopCategories;
