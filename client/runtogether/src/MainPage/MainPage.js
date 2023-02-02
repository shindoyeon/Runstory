import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Recommend from './Recommend';
import RecommendMsg from './RecommendMsg';
import Feed from './Feed';

function MainPage() {
  return (
    <div style={{width: "90%"}}>
      <Header></Header>
      <RecommendMsg></RecommendMsg>
      <Recommend></Recommend>
      <Feed></Feed>
      <Footer></Footer>
    </div>
  );
}

export default MainPage;
