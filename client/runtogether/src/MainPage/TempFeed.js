import React, {useEffect, useState} from 'react';
import './Feed.css';
import axios from "axios";
import FeedCard from './FeedCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // fontawesome 사용
import { faShare, faHeart, faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import {
    Card, // chakra-ui의 Card로 피드 하나를 구성할 것임 
    CardHeader,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Input,
    Button,
    CardBody,
    ChakraProvider,
    Spinner,
  } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';

const axiosTest = async () => {
  const res = await axios.get(
    "https://03836d92-057f-45bb-a900-061584777196.mock.pstmn.io/main/feed"
  );
  return res.data;
};

export default function TempFeed() {
  const [feeds, setFeeds] = useState([]);
  const [isMore, setIsMore] = useState(true);
  const [arr, setArr] = useState([]);
    var startIdx = 0;

    useEffect(() => {
      (async () => {
        const data = await axiosTest();
        setFeeds(data.data);
        setArr(Array.from(feeds.slice(startIdx, startIdx+5)));
      })();
    }, [feeds.length]);
    
    function loadMore() {
      startIdx = arr.length;
      var endIdx = startIdx + 5;
      if(arr.length === feeds.length) {
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

    return (
      <div className='entire-feed'>
      <InfiniteScroll
          dataLength={arr.length}
          next={loadMore}
          hasMore={isMore}
          loader={<p style={{ textAlign: "center" }}><Spinner textAlign={'center'}/></p>}
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
    );
  }