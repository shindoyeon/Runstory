// 마이페이지
import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import './User.css';

function User() {
  return (
    <ChakraProvider>
      <Header></Header>
      <div className='user-title'>
          마이페이지
      </div>
      <Footer></Footer>
    </ChakraProvider>
  )
}

export default User;