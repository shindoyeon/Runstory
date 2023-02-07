import React, {useState, useEffect} from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Swiper.css";
import axios from 'axios';
import SliderImg from "./SliderImg"

const Swiper = () => { 
  const [info, setInfo] = useState([]);
  const [infoTitle, setInfoTitle] = useState([]);
  
  useEffect(() => {
    (async () => {
      const data = await axios.get(
    "https://03836d92-057f-45bb-a900-061584777196.mock.pstmn.io/running"
  );
      setInfo(data.data.data);
      setInfoTitle(Object.keys(data.data.data))
    })();
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