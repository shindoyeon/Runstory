import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import BetweenBodyFooter from '../common/BetweenBodyFooter';
import Swiper from './Swiper'
import RunningCrewPageMsg from './RunningCrewPageMsg';


function RunningCrewList() {
  return (
      <div style={{width: '90%'}}>
        <Header></Header>
        <div>
        <RunningCrewPageMsg></RunningCrewPageMsg>
        <Swiper></Swiper>
        <BetweenBodyFooter></BetweenBodyFooter>
        </div>
        <Footer></Footer>
      </div>
  );
}

export default RunningCrewList;
