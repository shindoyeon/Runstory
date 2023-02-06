import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { Link } from 'react-router-dom';
import './ChattingPageMsg.css';

const ChattingPageMsg = () => {
    return (
        <div className="chatting-room-header">
            <div className='header-left'>
                <p className='chatting-title'>채팅</p>
            </div>
            <div className='header-right'>
                <Link to='/create-running-crew'><div className='post-btn'>채팅방 생성 <FontAwesomeIcon icon={faArrowAltCircleRight} /></div></Link>
            </div>
        </div>
    );
}

export default ChattingPageMsg;