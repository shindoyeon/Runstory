import React from 'react';
import {
  Image,
  ChakraProvider,
  theme
} from '@chakra-ui/react';
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // fontawesome 사용
// import { faPersonRunning } from "@fortawesome/free-solid-svg-icons"; // 로고(사람 달리는 아이콘)
import {faHeart, faCommentDots} from "@fortawesome/free-regular-svg-icons" // 알림(하트), 채팅 버튼
import ImageFile  from './검흰흰누끼.png';


const Header = () => {
    return (
        <ChakraProvider theme={theme}>
            <header className='header'>
              <div className='left-header'><a href='/'><Image className='logo' src={ImageFile} style={{textAlign: 'left'}}/></a></div>
              <div className='right-header'>
                <div className='notice'><a href="/notice"><FontAwesomeIcon icon={faHeart} /></a></div>
                <div className='chat'><a href="/chatting"><FontAwesomeIcon icon={faCommentDots} /></a></div>
              </div>
            </header>
        </ChakraProvider>
      );
}

export default Header;
