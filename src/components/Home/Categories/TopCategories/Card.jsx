import React from "react";

const Card = () => {
  return (
    <div className="w-32 h-44 bg-white  relative">
      <div className="rounded-full bg-slate-100 w-32 h-32 absolute "></div>
      <div className="bottom-0 absolute">
        <h4>Mobile</h4>
      </div>
    </div>
  );
};

export default Card;
