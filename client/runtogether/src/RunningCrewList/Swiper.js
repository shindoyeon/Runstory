import React from 'react';
import Slider from "react-slick";
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
  Input,
  Button,
} from '@chakra-ui/react';

// import 'swiper/css';
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'
// import 'swiper/swiper-bundle.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircle, faCircleDot } from "@fortawesome/free-regular-svg-icons";

const Swiper = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1
  };

    return (
      <div className='swiper-slide'>
        <Modal isOpen={isOpen} onClose={onClose} size='xs' isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>간략 정보</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>제목: ㅇㅇ공원 가실 분</p>
            <p>작성자: ㅁㅁㅁ</p>
            <p>인원: 남자 ㅇ명, 여자 ㅇ명, 무관 ㅇ명</p>
            
          </ModalBody>

          <ModalFooter>
          <Button colorScheme='red' mr={3} onClick={onClose}>
            닫기
          </Button>
          <Button>
            자세히 보러가기
          </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
          <Slider {...settings} className='slide'>
            <div className='slide'>
              <div className='imgs'>
                <div className='img' onClick={onOpen}></div>
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
