import React, { useState,useEffect } from 'react';
import Card from './Card';
import { brandService } from '../../../../services';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1279 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 1279, min:1025  },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1025, min:780  },
          items: 1
        },
        bigmobile: {
          breakpoint: { max: 780, min: 490 },
          items:1
        },
        mobile: {
          breakpoint: { max: 490, min: 0 },
          items:1
        }
      };
    return (
        <div className='mt-10 mx-auto'>
            <Carousel responsive={responsive} showDots={true}>
               
            {
                brands?.map((brand,key)=>
                <Card {...brand} key={key}></Card> 
                )
                
            }
            </Carousel>
        </div>
    );
};

export default BrandsCarousel;
