import React from 'react';
import './HashTag.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const HashTag = () => {
  return (
    <div className='hashtags'>
        <div className='hashtag'>
            <p className='hashtag-content'># 10대</p>
        </div>
        <div className='hashtag selected'>
            <p className='hashtag-content'># 20대</p>
        </div>
        <div className='hashtag'>
            <p className='hashtag-content'># 30대</p>
        </div>
        <div className='hashtag selected'>
            <p className='hashtag-content'># 떠들면서</p>
        </div>
        <div className='hashtag'>
            <p className='hashtag-content'># 조용히</p>
        </div>
        <div className='hashtag'>
            <p className='hashtag-content'># 강아지랑</p>
        </div>
        <div className='hashtag selected'>
            <p className='hashtag-content'># 사람들끼리</p>
        </div>
        <div className='hashtag'>
            <p className='hashtag-content'># 정기적으로</p>
        </div>
        <div className='hashtag selected'>
            <p className='hashtag-content'># 오늘만</p>
        </div>
    </div>
  )
}

export default HashTag;