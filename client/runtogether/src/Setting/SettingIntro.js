import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import {
  Container,
  Divider,
  ChakraProvider,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './SettingIntro.css'
import SettingIntroMsg from './SettingIntroMsg';

const SettingIntro = () => {
  return (
    <ChakraProvider>
      <Header></Header>
        <SettingIntroMsg/>
            <Container>
            <div className='setting-detail'> 
              <Link to='/user'>마이페이지</Link>
              <Divider w='50%' ml='25%'/>
              차단설정
              <Divider w='50%' ml='25%'/>
              <Link to='/setting-alarm'>알림설정</Link>
              <Divider w='50%' ml='25%'/>
              문의하기
            </div>
            </Container>
      <Footer></Footer>
    </ChakraProvider>
  )
}

export default SettingIntro;




