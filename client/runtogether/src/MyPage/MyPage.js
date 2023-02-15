import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import BetweenBodyFooter from '../common/BetweenBodyFooter';
import Profile from './Profile'

function MainPage() {
  return (
    <div>
      <Header></Header>
      <BetweenBodyFooter></BetweenBodyFooter>
      <Profile></Profile>
      <Footer></Footer>
    </div>
  );
}

export default MainPage;
