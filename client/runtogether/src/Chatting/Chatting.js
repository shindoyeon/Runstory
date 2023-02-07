import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ChattingRoom from './ChattingRoomList';
import ChattingPageMsg from './ChattingPageMsg';


function Chatting() {
    return (
          <div>
            <Header></Header>
            <ChattingPageMsg></ChattingPageMsg>
            <ChattingRoom></ChattingRoom>
            <Footer></Footer>
          </div>
      );
}

export default Chatting;