import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'
// import 'swiper/swiper-bundle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleDot } from "@fortawesome/free-regular-svg-icons";
import './Swiper.css';

const ByRegion = () => {
    return (
            <Swiper>
                <SwiperSlide className='slide'><div className='imgs'><div className='img'><div className='info'><p className='title'>오늘 같이 뛰실 분 구해요~~!</p></div></div><div className='img2'><div className='info'><p className='title'>수원시 만석공원 같이 도실 분 있으면 친해져요!</p></div></div><div className='img'><div className='info'><p className='title'>오늘 같이 뛰실 분 구해요~~!</p></div></div><div className='img'><div className='info'><p className='title'>오늘 같이 뛰실 분 구해요~~!</p></div></div></div>
                    <div className='page-idx'><FontAwesomeIcon icon={faCircleDot} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} /></div>
                </SwiperSlide>
                <SwiperSlide className='slide'><div className='imgs'><div className='img'><div className='info'><p className='title'>오늘 같이 뛰실 분 구해요~~!</p></div></div><div className='img2'><div className='info'><p className='title'>수원시 만석공원 같이 도실 분 있으면 친해져요!</p></div></div><div className='img'><div className='info'><p className='title'>오늘 같이 뛰실 분 구해요~~!</p></div></div><div className='img'><div className='info'><p className='title'>오늘 같이 뛰실 분 구해요~~!</p></div></div></div>
                    <div className='page-idx'><FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircleDot} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} /></div>
                </SwiperSlide>
                <SwiperSlide className='slide'><div className='imgs'><div className='img'><div className='info'><p className='title'>오늘 같이 뛰실 분 구해요~~!</p></div></div><div className='img2'><div className='info'><p className='title'>수원시 만석공원 같이 도실 분 있으면 친해져요!</p></div></div><div className='img'><div className='info'><p className='title'>오늘 같이 뛰실 분 구해요~~!</p></div></div><div className='img'><div className='info'><p className='title'>오늘 같이 뛰실 분 구해요~~!</p></div></div></div>
                    <div className='page-idx'><FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircleDot} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} /></div>
                </SwiperSlide>
                <SwiperSlide className='slide'><div className='imgs'><div className='img'><div className='info'><p className='title'>오늘 같이 뛰실 분 구해요~~!</p></div></div><div className='img2'><div className='info'><p className='title'>수원시 만석공원 같이 도실 분 있으면 친해져요!</p></div></div><div className='img'><div className='info'><p className='title'>오늘 같이 뛰실 분 구해요~~!</p></div></div><div className='img'><div className='info'><p className='title'>오늘 같이 뛰실 분 구해요~~!</p></div></div></div>
                    <div className='page-idx'><FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCircleDot} /></div>
                </SwiperSlide>
            </Swiper>
    );
}

export default ByRegion;
