import React from "react";
import menuicon from "../../assets/Group.svg";
import Logo from "../../assets/MegaMart.svg";
import Search from "../../assets/Search.svg";
import List from "../../assets/List.svg";
import User from "../../assets/User.svg";
import Buy from "../../assets/Buy.svg";
import Line from "../../assets/Line.svg";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="fixed flex flex-col top-0 items-center w-full">
      <TopBar></TopBar>
      <div className=" ">
        <div className="mx-auto  h-24  flex items-center bg-white">
          <img src={menuicon} className="mr-4 lg:w-10 w-10" />

          <Link to="/" className="hover:cursor-pointer">
            <img src={Logo} className="lg:mr-52 mr-10" />
          </Link>
          <div className="relative px-5 lg:flex hidden justify-between bg-sky-50 rounded-3xl  lg:w-full h-12 items-center lg:mr-7 mr-2 ">
            <div>
              <button type="">
                <img src={Search} />
              </button>
            </div>
            <div>
              <form className="">
                <input
                  className="bg-sky-50 w-96 "
                  type="input"
                  name="search"
                  placeholder="Search essentials, groceries and more..."
                />
              </form>
            </div>
            <div>
              <button type="">
                <img src={List} />
              </button>
            </div>
          </div>
          {/*search button mobile view*/}
          <div className="w-7 items-center flex lg:hidden">
            <button type="">
              <img src={Search} />
            </button>
          </div>
          {/****************************/}
          <div className="lg:flex lg:justify-between grid grid-cols-3 lg:w-auto w-16">
            <div className="xl:w-44 flex w-10 justify-center xl:justify-start">
              <div>
                <img src={User} />
              </div>
              <h2 className="xl:flex hidden">Sign Up/Sign In</h2>
            </div>
            <div className="w-5 flex justify-center">
              <img src={Line} className="" />
            </div>
            <div className="xl:w-44 flex w-10 justify-center xl:justify-start">
              <div>
                <img src={Buy} />
              </div>
              <h2 className="xl:flex hidden">Cart</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
