import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'
// import 'swiper/swiper-bundle.css'
import './Recommend.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleDot } from "@fortawesome/free-regular-svg-icons";

const Recommend = () => {
    return (
        <Swiper>
            <SwiperSlide className='slide'><div className='imgs'><div className='img'></div><div className='img'></div><div className='img'></div><div className='img'></div></div>
                <div className='page-idx'><FontAwesomeIcon icon={faCircleDot} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} /></div>
            </SwiperSlide>
            <SwiperSlide className='slide'><div className='imgs'><div className='img'></div><div className='img'></div><div className='img'></div><div className='img'></div></div>
                <div className='page-idx'><FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircleDot} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} /></div>
            </SwiperSlide>
            <SwiperSlide className='slide'><div className='imgs'><div className='img'></div><div className='img'></div><div className='img'></div><div className='img'></div></div>
                <div className='page-idx'><FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircleDot} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} /></div>
            </SwiperSlide>
            <SwiperSlide className='slide'><div className='imgs'><div className='img'></div><div className='img'></div><div className='img'></div><div className='img'></div></div>
                <div className='page-idx'><FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircleDot} /></div>
            </SwiperSlide>
        </Swiper>
    );
}

export default Recommend;
