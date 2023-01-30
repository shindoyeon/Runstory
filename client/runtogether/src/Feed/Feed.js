import React from 'react';
import './Feed.css';
import {
  ChakraProvider,
  theme,
  Box,
  Card,
  Image,
} from '@chakra-ui/react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import FeedPersonalButton from './FeedPersonalButton';
import ProfilePhoto from './ProfilePhoto';
import ProfileStatus from './ProfileStatus';
import ProfileFollow from './ProfileFollow';
import ProfileFeed from './ProfileFeed';

function Feed() {
  return (
    <ChakraProvider theme={theme}>
        <Header></Header>
            <FeedPersonalButton></FeedPersonalButton>
            <Box direction={{base: 'row'}} width='90%' ms='5%' mt='10px' display='flex'>
              <ProfilePhoto></ProfilePhoto>
              <ProfileStatus></ProfileStatus>
              <ProfileFollow></ProfileFollow>
            </Box>

            <Card>
              <Image>
                
              </Image>
            </Card>
        <Footer></Footer>
    </ChakraProvider>
  );
}

export default Feed;

// 컴포넌트 : 프로필사진 및 변경 
// 내부 