import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import BetweenBodyFooter from '../common/BetweenBodyFooter';
import Swiper from './Swiper'
import FilterName from './FilterName';
import RunningCrewPageMsg from './RunningCrewPageMsg';

function RunningCrewList() {
  return (
      <div style={{width: '90%'}}>
        <Header></Header>
        <div style={{width: '100%', margin: "0 auto"}}>
        <RunningCrewPageMsg></RunningCrewPageMsg>
        <FilterName name="# 근처에_있는"></FilterName>
        <Swiper hashtag="# 근처에 있는"></Swiper>
        <FilterName name="# 오늘_모집_마감"></FilterName>
        <Swiper hashtag="# 오늘_모집_마감"></Swiper>
        <FilterName name="# 사용자_해시태그_1"></FilterName>
        <Swiper hashtag="# 사용자_해시태그_1"></Swiper>
        <FilterName name="# 사용자_해시태그_2"></FilterName>
        <Swiper hashtag="# 사용자_해시태그_2"></Swiper>
        <FilterName name="# 사용자_해시태그_3"></FilterName>
        <Swiper hashtag="# 사용자_해시태그_3"></Swiper>
        <BetweenBodyFooter></BetweenBodyFooter>
        </div>
        <Footer></Footer>
      </div>
  );
}

export default RunningCrewList;
