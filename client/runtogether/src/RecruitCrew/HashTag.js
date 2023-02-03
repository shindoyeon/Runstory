import React from 'react';
import './HashTag.css';
import axios from 'axios';

// const axiosTest = async () => {
//   const res = await axios.get(
//     "https://03836d92-057f-45bb-a900-061584777196.mock.pstmn.io/main/feed"
//   );
//   return res.data;
// };

const HashTag = ({hashtags}) => {
  return (
    <div className='hashtags'>
        {/* {console.log(hashtags)}
        {
            hashtags.map((hashtag, idx) => {
                return(
                    <div className='hashtag' key={idx}>
                    <p className='hashtag-content'>{hashtag.hashtagName}</p>
                </div>
                );
            })
        } */}
        {/* <div className='hashtag selected'>
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
        </div> */}
    </div>
  )
}

export default HashTag;