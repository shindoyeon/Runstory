import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import {
  Container,
  Divider,
  ChakraProvider,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './ControlIntro.css'

const ControlIntro = () => {
  return (
    <ChakraProvider>
      <Header></Header>
        <div className='control-title'>
          설정
        </div>
            <Container>
            <div className='control-detail'> 
              <Link to='/user'>마이페이지</Link>
              <Divider w='50%' ml='25%'/>
              차단설정
              <Divider w='50%' ml='25%'/>
              알림설정
              <Divider w='50%' ml='25%'/>
              문의하기
            </div>
            </Container>
      <Footer></Footer>
    </ChakraProvider>
  )
}

export default ControlIntro;




