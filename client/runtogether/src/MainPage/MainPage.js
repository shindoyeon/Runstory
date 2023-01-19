import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Recommend from './Recommend';
import RecommendMsg from './RecommendMsg';
import Feed from './Feed';
// import "./MainPage.css";

function MainPage() {
  return (
    <ChakraProvider theme={theme} className='body'>
      <div className='body'>
        <Header></Header>
        <RecommendMsg></RecommendMsg>
        <Recommend></Recommend>
        <Feed className='feed'></Feed>
        <Footer className='footer'></Footer>
      </div>
    </ChakraProvider>
  );
}

export default MainPage;
