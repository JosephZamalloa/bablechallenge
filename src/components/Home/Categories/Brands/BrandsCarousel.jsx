import React, { useState,useEffect } from 'react';
import Card from './Card';
import { brandService } from '../../../../services';

const BrandsCarousel = () => {
    const [brands,setBrands]=useState([])
    useEffect(() => {
     async function getBrands(){
        const data=await brandService.fetchBrand()
        setBrands(data.data)
        console.log(data)
     }
    getBrands()
      
    }, [])
    
    return (
        <div className='grid grid-flow-col grid-cols-2 lg:grid-cols-3 mt-10 overflow-hidden mx-auto'>
            
            {
                brands?.map((brand,key)=>
                <Card {...brand}></Card>
                )
            }
        </div>
    );
};

export default BrandsCarousel;
