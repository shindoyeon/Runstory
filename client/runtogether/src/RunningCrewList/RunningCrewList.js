import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Header from '../common/Header';
import Footer from '../common/Footer';
// import BetweenBodyFooter from '../common/BetweenBodyFooter';
// import Swiper from './Swiper'
import GpsFilter from './GpsFilter';
import LastDayFilter from './LastDayFilter';
import HashTagFilter1 from './HashTagFilter1';
import HashTagFilter2 from './HashTagFilter2';
import HashTagFilter3 from './HashTagFilter3';
import RunningCrewPageMsg from './RunningCrewPageMsg';

function RunningCrewList() {
  return (
    <ChakraProvider theme={theme} className='body'>
      <div className='body'>
        <Header></Header>
        <RunningCrewPageMsg></RunningCrewPageMsg>
        <GpsFilter></GpsFilter>
        {/* <Swiper></Swiper> */}
        <LastDayFilter></LastDayFilter>
        {/* <Swiper></Swiper> */}
        <HashTagFilter1></HashTagFilter1>
        {/* <Swiper></Swiper> */}
        <HashTagFilter2></HashTagFilter2>
        {/* <Swiper></Swiper> */}
        <HashTagFilter3></HashTagFilter3>
        {/* <Swiper></Swiper> */}
        <Footer className='footer'></Footer>
      </div>
    </ChakraProvider>
  );
}

export default RunningCrewList;
