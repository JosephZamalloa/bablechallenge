import React, { useState, useEffect, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { GlobalContext } from "../context/GlobalContext";
const Details = () => {
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState("");
  const { addItem } = useContext(GlobalContext);
  const [buy, setBuy] = useState({});

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
    <div className="container mt-44 mx-auto flex gap-24 px-8 mb-20 justify-center flex-col lg:flex-row items-center">
      <div className="bg-slate-100 p-4 w-80 lg:w-96  flex justify-center rounded-xl border-[2px] border-sky-500 ">
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <h4 className="text-xl font-medium">${price}</h4>
        <h4 className="text-xl font-medium text-green-600">
          Save -&nbsp; {(price * 25) / 100}
        </h4>
        <div className="flex justify-center flex-col items-center gap-6">
          <div className=" flex gap-4 items-center">
            <button
              type="button"
              onClick={() => {
                setQuantity(quantity > 0 ? quantity - 1 : quantity);
              }}
            >
              <span className="rounded-full font-extrabold text-xl py-2 px-4 bg-[#008ECC] text-white">
                -
              </span>
            </button>
            <h1 className="text-3xl">{quantity}</h1>
            <button
              type=" button"
              onClick={() => {
                setQuantity(quantity >= 0 ? quantity + 1 : quantity);
                
              }}
            >
              <span className="rounded-full font-extrabold text-xl py-2 px-3 bg-[#008ECC] text-white">
                +
              </span>
            </button>
          </div>

          {quantity != 0 ? (
            <button
              type="button"
              onClick={() => {
                setBuy({ ...product, quantity });
                addItem(buy);
              }}
            >
              <div className="bg-[#008ECC] w-80 flex justify-center rounded-full text-white">
                Comprar
              </div>
            </button>
          ) : (
            <button type="" disabled>
              <div className="bg-[#89cfed] w-80 flex justify-center rounded-full text-white">
                Comprar
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
