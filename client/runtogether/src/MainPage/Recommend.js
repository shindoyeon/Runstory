import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import "swiper/swiper.scss";
// import 'swiper/css';
// import SwiperCore, { Navigation, Pagination } from "swiper";
// import "swiper/css"; //basic
import './Recommend.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircle, faCircleDot } from "@fortawesome/free-regular-svg-icons";



const Recommend = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      
      return (
        <div className='swiper-slide'>
          <Slider {...settings}>
            <div className='slide'>
              <div className='imgs'><div className='img'></div><div className='img'></div><div className='img'></div><div className='img'></div></div>
              <div className='imgs'><div className='img-title'>제목1</div><div className='img-title'>제목2</div><div className='img-title'>제목3</div><div className='img-title'>제목4</div></div>
            </div>
            <div className='slide'>
            <div className='imgs'><div className='img'></div><div className='img'></div><div className='img'></div><div className='img'></div></div>
            </div>
            <div className='slide'>
            <div className='imgs'><div className='img'></div><div className='img'></div><div className='img'></div><div className='img'></div></div>
            </div>
            <div className='slide'>
            <div className='imgs'><div className='img'></div><div className='img'></div><div className='img'></div><div className='img'></div></div>
            </div>
            <div className='slide'>
            <div className='imgs'><div className='img'></div><div className='img'></div><div className='img'></div><div className='img'></div></div>
            </div>
            <div className='slide'>
            <div className='imgs'><div className='img'></div><div className='img'></div><div className='img'></div><div className='img'></div></div>
            </div>
          </Slider>
      </div>

        // <Swiper>
        //     <SwiperSlide className='slide'><div className='imgs'><div className='img'></div><div className='img'></div><div className='img'></div><div className='img'></div></div>
        //         <div className='page-idx'><FontAwesomeIcon icon={faCircleDot} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} /></div>
        //     </SwiperSlide>
        //     <SwiperSlide className='slide'><div className='imgs'><div className='img'></div><div className='img'></div><div className='img'></div><div className='img'></div></div>
        //         <div className='page-idx'><FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircleDot} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} /></div>
        //     </SwiperSlide>
        //     <SwiperSlide className='slide'><div className='imgs'><div className='img'></div><div className='img'></div><div className='img'></div><div className='img'></div></div>
        //         <div className='page-idx'><FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircleDot} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} /></div>
        //     </SwiperSlide>
        //     <SwiperSlide className='slide'><div className='imgs'><div className='img'></div><div className='img'></div><div className='img'></div><div className='img'></div></div>
        //         <div className='page-idx'><FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircleDot} /></div>
        //     </SwiperSlide>
        // </Swiper>
    );
}

export default Recommend;
