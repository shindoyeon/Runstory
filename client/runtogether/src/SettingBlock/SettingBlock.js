import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import './SettingBlock.css'

function UserBlockList() {
  return (
    <ChakraProvider>
      <Header></Header>
      <div className='block-title'>
          차단설정
      </div>
      <Footer></Footer>
    </ChakraProvider>
  )
}

export default UserBlockList;