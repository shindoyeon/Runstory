import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
// import BetweenBodyFooter from '../common/BetweenBodyFooter';
// import Swiper from './Swiper'
import FilterName from './FilterName';
import RunningCrewPageMsg from './RunningCrewPageMsg';

function RunningCrewList() {
  return (
      <div>
        <Header></Header>
        <RunningCrewPageMsg></RunningCrewPageMsg>
        <FilterName name="# 근처에_있는"></FilterName>
        {/* <Swiper></Swiper> */}
        <FilterName name="# 오늘_모집_마감"></FilterName>
        {/* <Swiper></Swiper> */}
        <FilterName name="# 사용자_해시태그_1"></FilterName>
        {/* <Swiper></Swiper> */}
        <FilterName name="# 사용자_해시태그_2"></FilterName>
        {/* <Swiper></Swiper> */}
        <FilterName name="# 사용자_해시태그_3"></FilterName>
        {/* <Swiper></Swiper> */}
        <Footer></Footer>
      </div>
  );
}

export default RunningCrewList;
