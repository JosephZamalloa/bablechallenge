import React from "react";

const Card = () => {
  return (
    <div className="w-56 h-72 bg-slate-100 rounded-lg overflow-hidden relative shadow-md">
      <div className="bg-blue-500 w-14 h-14 rounded-bl-3xl right-0 absolute text-lg text-white">
        <div>
          <h3 className="text-center">% OFF</h3>
        </div>
      </div>
      <div className="w-56 h-28 bg-white bottom-0 absolute"></div>
    </div>
  );
};

export default Card;
