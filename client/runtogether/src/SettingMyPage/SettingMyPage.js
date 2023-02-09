// 마이페이지
import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import './SettingMyPage.css';
import SettingMyPagePhoto from './SettingMyPagePhoto'

function MyPage() {
  return (
    <ChakraProvider>
      <Header></Header>
      <div className='user-title'>
          마이페이지
      </div>
      <SettingMyPagePhoto></SettingMyPagePhoto>
      <Footer></Footer>
    </ChakraProvider>
  )
}

export default MyPage;