import React from "react";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import {Link} from 'react-router-dom';
const Card = ({id, attributes: { image, name, price } }) => {
  const img = `http://localhost:1337${image.data[0].attributes.url}`;
  const [product,setProduct]=useLocalStorage('product','')
  
  return (
    <Link to={`/products/detail/${id}`}>
    <div className="flex justify-center overflow-visible" onClick={()=>{setProduct({name,price,img})}}>
      
    <div className="w-56 h-72 bg-slate-100 rounded-lg hover:shadow-xl relative shadow-md hover:border-2 hover:border-sky-400 overflow-hidden mb-8">
      <div className="bg-[#008ECC] w-14 h-14 rounded-bl-3xl right-0 absolute text-lg text-white">
        <div>
          <h3 className="text-center">25% OFF</h3>
        </div>
      </div>
      <img src={img} className="p-10" />

      <div className="w-56 h-28 bg-white bottom-0 absolute grid grid-flow-row font-semibold text-slate-500 px-5 py-3 ">
        <div className="text-sm overflow-hidden">{name}</div>
        <div className=" flex gap-3">
          <h4>${price}</h4>
          <h4 className="line-through">${price - (price * 25) / 100}</h4>
        </div>
        <span className="w-18 h-[1px] bg-slate-200"></span>
        <div className="text-green-600 font-semibold">Save - ${(price * 25) / 100}</div>
      </div>
    </div>
    </div>
    </Link>
  );
};

export default Card;
