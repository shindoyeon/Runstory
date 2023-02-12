import React, {useState, useEffect} from 'react';
import './HashTag.css';
import axios from '../common/axios';

const HashTag = (props) => {
  const [hashtags, setHashtags] = useState([]);
  var selectedhashtags = [];
  useEffect(() => {
    (async () => {
      const res = await axios({url: '/feed/hashtag', method: "GET"});
      setHashtags(res.data.data);
    })();
  }, []);

    function clickHashtag(e) {
      if(e.target.classList.contains("hashtag-selected")) {
          e.target.classList.remove('hashtag-selected');
          e.target.classList.add('hashtag');
          // console.log(e.target.classList) // 이걸로 게시글 POST 데이터 넘겨주면 되겠다
          selectedhashtags.pop(e.target.value);
          props.setSelectedhashtags(enters => [...enters, e.target.value]);
      }
      else {
          e.target.classList.remove('hashtag')
          e.target.classList.add('hashtag-selected')
          selectedhashtags.push(e.target.value);
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
              id="hashtag"
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
