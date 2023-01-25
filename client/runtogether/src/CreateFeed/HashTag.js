import React from 'react';
import './HashTag.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const HashTag = () => {
    const hashtag = [
        {
            title: '# 10대',
            className: 'hashtag'
        },
        {
            title: '# 20대',
            className: 'hashtag'
        },
        {
            title: '# 30대',
            className: 'hashtag'
        },
        {
            title: '# 조용히',
            className: 'hashtag'
        },
        {
            title: '# 떠들면서',
            className: 'hashtag'
        },
        {
          title: '# 살살_걷기',
          className: 'hashtag'
        },
        {
          title: '# 살짝_뛰기',
          className: 'hashtag'
        },
        {
          title: '# 소수_인원',
          className: 'hashtag'
        },
        {
          title: '# 다수_인원',
          className: 'hashtag'
        },
        {
          title: '# 공원_산책',
          className: 'hashtag'
        },
        {
          title: '# 도로_산책',
          className: 'hashtag'
        },
        {
          title: '# 강아지랑',
          className: 'hashtag'
        },
        {
          title: '# 사람끼리만',
          className: 'hashtag'
        },
        {
          title: '# 정기적으로',
          className: 'hashtag'
        },
        {
          title: '# 오늘만',
          className: 'hashtag'
        },
    ]
    const [arr, setArr] = React.useState(hashtag)
    const clickHashtag = i => {
        if(arr[i].className==='hashtag') { // 현재 상태에 따라 클릭 시 상태 변경
          let copyArray = [...arr]; // 
          copyArray[i] = {title: copyArray[i].title, className: "hashtag selected"}
          setArr ( copyArray );
        }
        else {
          let copyArray = [...arr];
          copyArray[i] = {title: copyArray[i].title, className: "hashtag"}
          setArr ( copyArray );
        }
    }

  return (
    <div className="container">
      {arr.map((item, idx) => {
        return (
          <>
            <button
              value={idx}
              type='button'
              // hashtag: 회색, hashtag selected: 빨강
              onClick={()=> {
                  clickHashtag(idx)
                }                
            }
            className={item.className.toString()}
            >
              {item.title}
            </button>
          </>
        );
      })}
    </div>
  );
}






//   return (
//     <div className='hashtags'>
//         <div className='hashtag'>
//             <p className='hashtag-content'># 10대</p>
//         </div>
//         <div className='hashtag selected'>
//             <p className='hashtag-content'># 20대</p>
//         </div>
//         <div className='hashtag'>
//             <p className='hashtag-content'># 30대</p>
//         </div>
//         <div className='hashtag selected'>
//             <p className='hashtag-content'># 떠들면서</p>
//         </div>
//         <div className='hashtag'>
//             <p className='hashtag-content'># 조용히</p>
//         </div>
//         <div className='hashtag'>
//             <p className='hashtag-content'># 강아지랑</p>
//         </div>
//         <div className='hashtag selected'>
//             <p className='hashtag-content'># 사람들끼리</p>
//         </div>
//         <div className='hashtag'>
//             <p className='hashtag-content'># 정기적으로</p>
//         </div>
//         <div className='hashtag selected'>
//             <p className='hashtag-content'># 오늘만</p>
//         </div>
//     </div>
//   )
// }

export default HashTag;