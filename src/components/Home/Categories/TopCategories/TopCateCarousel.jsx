import React, { useEffect, useState } from "react";
import Card from "./Card";
import { categoryService } from "../../../../services";
const TopCateCarousel = () => {
const[categories,setCategories]=useState([])
useEffect(()=>{
  async function getCategories(){
    const data=await categoryService.fetchCategory()
    setCategories(data.data)
    
  }
  getCategories()
},[])
  return (
    <div className="grid grid-flow-row grid-cols-8 gap-44 relative overflow-hidden">
      {
        categories?.map((category,key)=>(
<Card {...category}></Card>
        ))
      }
      
      
    </div>
  );
};

export default TopCateCarousel;
