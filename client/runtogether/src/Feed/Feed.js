import React from 'react';
import './Feed.css';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import FeedPersonalButton from './FeedPersonalButton';

function Feed() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Header></Header>
        <FeedPersonalButton></FeedPersonalButton>
        <Footer></Footer>
      </div>
    </ChakraProvider>
  );
}

export default Feed;