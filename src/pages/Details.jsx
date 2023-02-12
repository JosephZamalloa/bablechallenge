import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
const Details = () => {
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState("");

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("product"));
    if (item) {
      setProduct(item);
    }
  }, []);
  const name = product.name;
  const img = product.img;
  const price = product.price;

  return (
    <div className="container mt-44 mx-auto flex gap-24 px-8 mb-20 justify-center">
      <div className="bg-slate-100 p-4 w-96  flex justify-center rounded-xl border-[2px] border-sky-500 ">
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <h4 className="text-xl font-medium">{price}</h4>
        <div className="flex justify-center">
          <div>
            <span></span>

            <span></span>
          </div>
          <div className="bg-[#008ECC] w-80 flex justify-center rounded-full text-white">Comprar</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
