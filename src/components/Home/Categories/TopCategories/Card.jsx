import React from "react";

const Card = ({attributes:{image,name}}) => {
  const img=`http://localhost:1337${image.data[0].attributes.url}`
  console.log(image.data[0].attributes.url)
  return (
    <div>
      <button className="w-32 h-44 bg-white  relative flex justify-center">
      <div className="rounded-full bg-slate-100 w-32 h-32 absolute flex justify-center overflow-hidden hover:shadow-md hover:border-[2px] hover:border-cyan-500">
        <img src={img} className="p-5"/>
      </div>
      <div className="bottom-0 absolute flex items-center ">
        <div>
          <h4>{name}</h4>
        </div>
      </div>
      </button>
    </div>
  );
};

export default Card;
