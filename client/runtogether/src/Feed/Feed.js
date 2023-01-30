// import React from 'react';
import './Feed.css';
import {
  ChakraProvider,
  theme,
  Box,
  Card,
} from '@chakra-ui/react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import FeedPersonalButton from './FeedPersonalButton';
import ProfileIdPhoto from './ProfileIdPhoto';
import ProfileStatus from './ProfileStatus';
import ProfileFollow from './ProfileFollow';
import ProfileFeed from './ProfileFeed';

function Feed() {
  return (
    <ChakraProvider theme={theme}>
      <Header></Header>
      <div>   
          <FeedPersonalButton></FeedPersonalButton>
          <Box direction={{base: 'row'}} width='90%' ms='5%' mt='10px' display='flex'>
            <ProfileIdPhoto></ProfileIdPhoto>
            <Card direction={{base: 'column'}}> 
              <ProfileStatus></ProfileStatus>
              <ProfileFollow></ProfileFollow>
            </Card>
          </Box>
      </div>
      <div>
        <ProfileFeed></ProfileFeed>
      </div>
      <Footer></Footer>
    </ChakraProvider>

  );
}

export default Feed;