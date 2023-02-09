import React from "react";
import Line from '../../assets/Line.svg'
import Location from '../../assets/Location.svg'
import Delivery from '../../assets/Delivery.svg'
import Discount from '../../assets/Discount.svg'
const TopBar = () => {
  return (
    <div className="mx-auto container h-10 bg-slate-50 overflow-hidden flex items-center justify-between text-xs md:text-base text-slate-400">
      <div>
        <h4 className="hidden sm:flex">Welcome to worldwide Megamart!</h4>
      </div>
      <div className="flex">
        <div className="flex">
          <img src={Location} alt="" />
          <h4>Deliver to 423651</h4>
        </div>
        <div className="w-5 flex justify-center">
          <img src={Line} className="" />
        </div>
        <div className="flex">
          <img src={Delivery} alt="" />
          <h4>Track your order</h4>
        </div>
        <div className="w-5 flex justify-center">
          <img src={Line} className="" />
        </div>
        <div className="flex">
          <img src={Discount} alt="" />
          <h4>All Offers</h4>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
