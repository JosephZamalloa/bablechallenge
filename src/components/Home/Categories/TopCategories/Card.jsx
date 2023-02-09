import React from "react";

const Card = ({attributes:{image,name}}) => {
  return (
    <div className="w-32 h-44 bg-white  relative flex justify-center">
      <div className="rounded-full bg-slate-100 w-32 h-32 absolute ">
        
      </div>
      <div className="bottom-0 absolute flex items-center ">
        <div>
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
