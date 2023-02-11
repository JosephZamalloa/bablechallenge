import React, { useEffect, useState } from "react";
import Card from "./Card";
import { mobileService } from "../../../../services";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const OfferCarousel = () => {
  const [mobiles, setMobiles] = useState([]);
  useEffect(() => {
    async function getMobile() {
      const data = await mobileService.fetchMobile();

      setMobiles(data.data);
    }
    getMobile();
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1279 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1279, min:1025  },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1025, min:780  },
      items: 3
    },
    bigmobile: {
      breakpoint: { max: 780, min: 490 },
      items:2
    },
    mobile: {
      breakpoint: { max: 490, min: 0 },
      items:1
    }
  };
  return (
    <div className=" mt-10">
      <Carousel responsive={responsive}>

      {mobiles?.map((mobile, key) => (
        <Card {...mobile} key={key}></Card>
        ))}
        </Carousel>
    </div>
  );
};

export default OfferCarousel;
