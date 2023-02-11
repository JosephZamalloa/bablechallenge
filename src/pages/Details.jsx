import React, { useState } from "react";

const Details = ({attributes:{name,data,img}}) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="container">
      <div>
        
      </div>
      <div>
        <h1>{name}</h1>
        <h4>{price}</h4>
        <div>
          <div>
            <span></span>
            {quantity}
            <span></span>
          </div>
          <div className="bg-[#008ECC]">
            Comprar
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
