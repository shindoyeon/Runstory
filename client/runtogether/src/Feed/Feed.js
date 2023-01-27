import React from 'react';
import './Feed.css';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import FeedPersonalButton from './FeedPersonalButton';
import Profile from './Profile';

function Feed() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Header></Header>
          <FeedPersonalButton></FeedPersonalButton>
          <Profile></Profile>
        <Footer></Footer>
      </div>
    </ChakraProvider>
  );
}

export default Feed;

// 컴포넌트 : 프로필사진 및 변경 
// 내부 