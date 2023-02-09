import React from "react";
import "tw-elements";
const Carousel = () => {
  return (
    <div className="container overflow-hidden mx-auto px-28 ">
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden h-80">
          {/*item 1 */}
          <div className="carousel-item active relative float-left w-full ">
            {/*big circle*/}
            <div className="bg-slate-900  h-80 relative rounded-lg opacity-95">
              <div className="border-2 rounded-full w-80 h-80 flex justify-center border-slate-700 right-0 absolute bottom-44">
                <div className="bg-slate-700 rounded-full w-72 h-72 m-auto"></div>
              </div>
              {/*small circle*/}
              <div className="border-2 rounded-full w-52 h-52 flex justify-center border-slate-700 right-32 top-52 absolute ">
                <div className="bg-slate-700 rounded-full w-44 h-44 m-auto"></div>
              </div>
            </div>
          </div>
          {/*item 2 */}
          <div className="carousel-item relative float-left w-full">
            {/*big circle*/}
            <div className="bg-sky-300  h-80 relative rounded-lg ">
              <div className="border-2 rounded-full w-80 h-80 flex justify-center border-sky-200 right-0 absolute bottom-44">
                <div className="bg-sky-200 rounded-full w-72 h-72 m-auto"></div>
              </div>
              {/*small circle*/}
              <div className="border-2 rounded-full w-52 h-52 flex justify-center border-sky-200 right-32 top-52 absolute ">
                <div className="bg-sky-200 rounded-full w-44 h-44 m-auto"></div>
              </div>
            </div>
          </div>
          {/*item 3 */}
          <div className="carousel-item relative float-left w-full">
            {/*big circle*/}
            <div className="bg-orange-300  h-80 relative rounded-lg ">
              <div className="border-2 rounded-full w-80 h-80 flex justify-center border-orange-200 right-0 absolute bottom-44">
                <div className="bg-orange-200 rounded-full w-72 h-72 m-auto"></div>
              </div>
              {/*small circle*/}
              <div className="border-2 rounded-full w-52 h-52 flex justify-center border-orange-200 right-32 top-52 absolute ">
                <div className="bg-orange-200 rounded-full w-44 h-44 m-auto"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 overflow-visible">
          {/*BUTTON LEFT*/}
          <div className="">
            <button
              className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center hover:outline-none hover:no-underline focus:outline-none focus:no-underline  rounded-lg "
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <div className="rounded-full border-white bg-blue-200 border-4 border-solid right-28  lg:px-6 lg:py-5 sm:py-5 p-5 absolute ">
                <span
                  className="carousel-control-prev-icon inline-block bg-no-repeat"
                  aria-hidden="true"
                ></span>
              </div>
              <span className="visually-hidden">Previous</span>
            </button>
          </div>
          {/*BUTTON RIGHT*/}
          <div className="flex justify-end ">
            <button
              className="carousel-control-next  absolute top-0 bottom-0 flex items-center justify-center p-0 text-center rounded-full hover:outline-none hover:no-underline focus:outline-none focus:no-underline "
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <div className="rounded-full border-white bg-blue-200 border-4 border-solid left-28 lg:px-6 lg:py-5 sm:py-5 p-5 absolute ">
                <span
                  className="carousel-control-next-icon inline-block bg-no-repeat  "
                  aria-hidden="true"
                ></span>
              </div>
              <span className="visually-hidden ">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
