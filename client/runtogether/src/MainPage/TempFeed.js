import React, {useEffect, useState} from 'react';
import './Feed.css';
import axios from "axios";
import FeedCard from './FeedCard';
// import Recommend from './Recommend';
import './Recommend.css'
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // fontawesome 사용
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import {
    Spinner,
  } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImg from "./SliderImg.js";
import SliderTitle from "./SliderTitle.js"

// const axiosTest = async () => {
//   const res = await axios.get(
//     "https://03836d92-057f-45bb-a900-061584777196.mock.pstmn.io/main/feed"
//   );
//   return res.data;
// };

// const axiosTest2 = async () => {
//   const res = await axios.get(
//     "https://03836d92-057f-45bb-a900-061584777196.mock.pstmn.io/main/running-hashtag"
//     );
//     console.log("들어오냐?")
//   return res.data;
// };

export default function TempFeed() {
  const [feeds, setFeeds] = useState([]);
  const [runningCrew, setrunningCrew] = useState([]);
  const [isMore, setIsMore] = useState(true);
  const [arr, setArr] = useState([]);
  var startIdx = 0;

  useEffect(() => {
      (async () => {
        const data = await axios.all(
          [axios.get(
            "https://03836d92-057f-45bb-a900-061584777196.mock.pstmn.io/main/feed"
          ),
          axios.get(
            "https://03836d92-057f-45bb-a900-061584777196.mock.pstmn.io/main/running-hashtag"
          )
        ]);
        setFeeds(data[0].data.data);
        setArr(Array.from(feeds.slice(startIdx, startIdx+5)));
        setrunningCrew(data[1].data.data);
      })();
    }, [feeds.length]);
    
    // 무한 스크롤을 하기 위함
    function loadMore() {
      startIdx = arr.length;
      var endIdx = startIdx + 5;
      if(arr.length === feeds.length || feeds.length===0) {
          setIsMore(false);
          return;
      }
      setTimeout(() => {
          setArr(arr.concat(Array.from(feeds.slice(startIdx, endIdx))));
      }, 1500);
    };

    // 피드 끝까지 내려갔을 때 새로고침 버튼을 만들어주기 위함
    function refreshToHome() {
      window.location.replace("/")
    }

    // Slide Setting
    const settings = {
      dots: false,
      infinite: false,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <>
        <div className='swiper-slide'>
            <Slider {...settings}>
              <div className='slide'>
                <div className='imgs'>
                {
                  <SliderImg runningCrew={runningCrew.slice(0, 4)}></SliderImg>
                }
                </div>
                <div className='imgs'>
                {
                  <SliderTitle runningCrew={runningCrew.slice(0, 4)}></SliderTitle>
                }
                </div>
              </div>
              <div className='slide'>
                <div className='imgs'>
                {
                  <SliderImg runningCrew={runningCrew.slice(4, 8)}></SliderImg>
                }
                </div>
                <div className='imgs'>
                {
                  <SliderTitle runningCrew={runningCrew.slice(4, 8)}></SliderTitle>
                }
                </div>
              </div>
              <div className='slide'>
                <div className='imgs'>
                {
                  <SliderImg runningCrew={runningCrew.slice(8, 12)}></SliderImg>
                }
                </div>
                <div className='imgs'>
                {
                  <SliderTitle runningCrew={runningCrew.slice(8, 12)}></SliderTitle>
                }
                </div>
              </div>
            </Slider>
        </div>

        <div className='entire-feed'>
        <InfiniteScroll
            dataLength={arr.length}
            next={loadMore}
            hasMore={isMore}
            loader={<p style={{ textAlign: "center", marginTop: "10px" }}><Spinner textAlign={'center'}/></p>}
            endMessage={
                <div style={{ textAlign: "center", fontWeight: "light"}}>
                    <div>
                        모든 피드를 확인했습니다
                    </div>
                    <FontAwesomeIcon className='refresh' icon={faArrowRotateRight} onClick={refreshToHome}></FontAwesomeIcon>
                </div>
            }
        >
          
          {arr.map((feed, idx) =>{
            return(
              <div height="50vh" margin='0 auto' marginTop='5%' key={idx}>
                <FeedCard feed={feed} key={idx}></FeedCard>
              </div>
            )
          })}
          </InfiniteScroll>
        </div>
      </>
    );
  }