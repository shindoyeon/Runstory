import React, {useState, useEffect} from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Swiper.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';
import SliderImg from "./SliderImg"

// import 'swiper/css';
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'
// import 'swiper/swiper-bundle.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircle, faCircleDot } from "@fortawesome/free-regular-svg-icons";

const Swiper = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
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
              <div className='filter-box'>
                  <div className='filter'># {item}</div>
              </div>
              <SliderImg hashtag={item} info={info}></SliderImg>
            </>
            );
         })}
      </div>
    );
}

export default Swiper;