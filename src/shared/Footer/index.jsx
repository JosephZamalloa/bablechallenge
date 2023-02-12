import React from "react";
import wsp from '../../assets/wsp.svg'
import call from '../../assets/Call.svg'

const Footer = () => {
  return (
    <div className="w-auto h-[590px] bg-[#008ECC] relative container mx-auto overflow-hidden px-32 py-20">
      <div className="grid grid-flow-col grid-cols-3 lg:grid-cols-4">
        <div className="text-white flex flex-col gap-10">
          <h1 className="font-semibold  text-xl xl:text-4xl">MegaMart</h1>
          <div className="flex flex-col gap-3">
            <div className="font-bold">Contact Us</div>
            <ul className="text-sm flex flex-col gap-3">
              <li className="flex gap-4"> <img src={wsp} alt=""/> Whats App<br/> +1 202-918-2132</li>
              <li className="flex gap-4">
                 <img src={call}></img>Call Us <br/>+1 202-918-2132</li>
            </ul>
          </div>
          <h3>Download App</h3>
          <div className="flex w-20 xl:w-36 gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
              alt=""
            />
            <img
              src="https://texttofloss.com/wp-content/uploads/2021/01/Google-Play-Store-Button.png"
              alt=""
            />
          </div>
        </div>
        <div className="text-white flex flex-col gap-2">
          <h3 className="font-semibold"> Most Popular Categories</h3>
          <div className="h-[2px] w-56 bg-white rounded-lg"></div>
          <div className="m-5">
            <ul className="text-sm list-disc flex flex-col gap-4">
              <li>Staples</li>
              <li>Beverages</li>
              <li>Personal Care</li>
              <li>Home Care</li>
              <li>Baby Care</li>
              <li>Vegetables & Fruits</li>
              <li>Snacks & Foods</li>
              <li>Dairy & Bakery</li>
            </ul>
          </div>
        </div>
        <div className="text-white flex flex-col gap-2">
          <h3 className="font-semibold"> Most Popular Categories</h3>
          <div className="h-[2px] w-56 bg-white rounded-lg"></div>
          <div className="m-5">
            <ul className="text-sm list-disc flex flex-col gap-4">
              <li>Staples</li>
              <li>Beverages</li>
              <li>Personal Care</li>
              <li>Home Care</li>
              <li>Baby Care</li>
              <li>Vegetables & Fruits</li>
              <li>Snacks & Foods</li>
              <li>Dairy & Bakery</li>
            </ul>
          </div>
        </div>
        <div>
          <span className="border-[#05ABF3] border-2 rounded-full p-5 absolute flex align-middle bottom-52 left-[1100px]">
            <span className="bg-[#05ABF3] rounded-full p-64"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
