import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ChattingRoomList from './ChattingRoomList';
import ChattingPageMsg from './ChattingPageMsg';
import Temp from './Temp';


function Chatting() {
    return (
          <div>
            <Header></Header>
            <ChattingPageMsg></ChattingPageMsg>
            <ChattingRoomList></ChattingRoomList>
            {/* <Temp></Temp> */}
            <Footer></Footer>
          </div>
      );
}

export default Chatting;