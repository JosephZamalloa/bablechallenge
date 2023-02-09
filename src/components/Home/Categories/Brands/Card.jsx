import React from "react";

const Card = ({ attributes: { name, image } }) => {
  return (
    <div>
      <div className="bg-slate-700 w-96 h-52 rounded-lg overflow-hidden absolute hover:shadow-md hover:border-[2px] hover:border-cyan-500">
        <div className="bg-slate-500 py-4 px-10 absolute rounded-lg left-5 top-5">
          <h2 className="text-base text-white">

          {name.toUpperCase()}
          </h2>
        </div>
        <div>
          <span className="bg-slate-500 rounded-full px-28 py-28 absolute bottom-16 left-52"></span>
          <span className="border-slate-500 border-2 rounded-full px-32 py-32 absolute bottom-12 left-48"></span>
        </div>
      </div>
    </div>
  );
};

export default Card;
