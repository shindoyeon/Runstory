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

const Swiper = (props) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1
  };

    return (
      <div className='swiper-slide'>
          <Slider {...settings} className='slide'>
            <div className='slide'>
              <div className='imgs'>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
              </div>
            </div>
            <div className='slide'>
              <div className='imgs'>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
              </div>
            </div>
            <div className='slide'>
              <div className='imgs'>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
              </div>
            </div>
          </Slider>
      </div>
    );
}

export default Swiper;
