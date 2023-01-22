import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Swiper.css"
// import 'swiper/css';
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'
// import 'swiper/swiper-bundle.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircle, faCircleDot } from "@fortawesome/free-regular-svg-icons";

const Swiper = () => {
  const settings = {
    // dots: false,
    // infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false
  };

    return (
      // <div className='slide-div'>
      // </div>`
      <div className='silde-div'>
        {/* <Slider>

        </Slider> */}
      {/* <Slider {...settings} className='slider'>
        <div className='img'></div><div className='img'></div><div className='img'></div><div className='img'></div>
        <div className='img'></div><div className='img'></div><div className='img'></div><div className='img'></div>
        <div className='img'></div><div className='img'></div>
      </Slider> */}
      </div>
    );
}

export default Swiper;
