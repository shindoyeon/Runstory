import React, {useState, useEffect} from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Swiper.css";
import axios from 'axios';
import SliderImg from "./SliderImg"

const Swiper = () => { 
  const [info, setInfo] = useState([]);
  const [infoTitle, setInfoTitle] = useState([]);
  const [isLogined, setIsLogined] = useState();
  
  // 러닝 메인 조회
  useEffect(() => {
    if(localStorage.getItem('access-token') === null) {
      return;
    }
    else {
    (async () => {
      const data = await axios.get("https://i8a806.p.ssafy.io/api/running", {
        headers: {
          Authorization: localStorage.getItem('access-token')
        },
        params: {
          "latitude" : 37.5034, // 검색 키워드
          "longitude": 127.05,
        }
    })




  //     const data = await axios.get(
  //   "http://i8a806.p.ssafy.io/api/running",
  //   {latitude: 36, longitude: 127}
  // );
      setInfo(data.data.data);
      setInfoTitle(Object.keys(data.data.data))
    })()};
  }, []);

    return (
      <div className='swiper-slide'>
      {infoTitle.map((item, idx) => {
          return (
            <>
              {/* 해시태그 제목 출력 */}
              <div className='filter-box'>
                  <div className='filter'># {item}</div>
              </div>
              {/* 해당 해시태그 이미지들 출력 */}
              <SliderImg hashtag={item} info={info}></SliderImg>
            </>
            );
         })}
      </div>
    );
}

export default Swiper;