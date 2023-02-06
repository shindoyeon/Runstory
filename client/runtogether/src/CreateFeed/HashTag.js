import React, {useState, useEffect} from 'react';
import './HashTag.css';
import axios from 'axios';

const HashTag = () => {
  const [hashtags, setHashtags] = useState([]);
  
  useEffect(() => {
    (async () => {
      const data = await axios.get(
    "https://03836d92-057f-45bb-a900-061584777196.mock.pstmn.io/hashtag"
  );
      setHashtags(data.data.data.hashtags);
    })();
  }, []);

    function clickHashtag(e) {
      if(e.target.classList.contains("hashtag-selected")) {
          e.target.classList.remove('hashtag-selected');
          e.target.classList.add('hashtag');
          // console.log(e.target.value) // 이걸로 게시글 POST 데이터 넘겨주면 되겠다
      }
      else {
          e.target.classList.remove('hashtag')
          e.target.classList.add('hashtag-selected')
      }
    }

  return (
    <div className="container">
      {hashtags.map((item, idx) => {
        return (
          <>
            <button
              value={item.hashtagId}
              key={idx}
              type='button'
              // hashtag: 회색, hashtag selected: 빨강
              onClick={clickHashtag}                
              className="hashtag"
            >
              # {item.hashtagName}
            </button>
          </>
        );
      })}
    </div>
  );
}

export default HashTag;
