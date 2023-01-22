import React from 'react';
import './Feed.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // fontawesome 사용
import { faShare, faHeart } from "@fortawesome/free-solid-svg-icons"; // 공유 버튼
import { faComment } from "@fortawesome/free-regular-svg-icons"; // 하트(좋아요), 댓글 버튼
import InfiniteScroll from 'react-infinite-scroll-component';

import {
    Card, // chakra-ui의 Card로 피드 하나를 구성할 것임 
    CardHeader,
    Image
  } from '@chakra-ui/react';

const Feed = () => {
    const feeds = [
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
        {   
            author: "tykwon_97",
            profileImg: "https://bit.ly/dan-abramov",
            content: "오늘 운동어떄요?",
            isLiked: false
        },
        {
            author: "songheew",
            profileImg: "https://bit.ly/dan-abramov",
            content: "천천히 산책해요~",
            isLiked: false
        },
        {
            author: "doyeon_shin",
            profileImg: "https://bit.ly/dan-abramov",
            content: "운동! 운동!",
            isLiked: false
        },
    ]

    const [arr, setArr] = React.useState(feeds, Array.from({length: 5}))

    const clickLike = i => {
          let copyArray = [...arr]; // 
          copyArray[i] = {author: copyArray[i].author, profileImg: copyArray[i].profileImg, content: copyArray[i].content, isLiked: !copyArray[i].isLiked,}
          setArr ( copyArray );
    }


    // const [items, setItems] = React.useState(Array.from({length: 30}))

    const fetchData = () => {
        setTimeout(() => {
            setArr(arr.concat(Array.from({length: 7})))
        }, 1500);
    }


    return (
        <div className='body'>
            <InfiniteScroll dataLength={arr.length} next={fetchData} hasMore={true} loader={<h5>로딩중...</h5>}>
                {arr.map((feed, index) => (
                    <div>
                        {/* THIS IS {index} */}
                    <div>{feed.author}</div>
                    <div>{feed.profileImg}</div>
                    <div>{index}</div>
                    </div>
            //         <Card className='card' key={index}>
            //         {/* 피드의 윗부분 (유저 아이디, 프로필 이미지, 공유 버튼)*/}
            //         <CardHeader className='card-header'> 
            //             <div className='card-header-left'>
            //                 <Image
            //                     borderRadius='full'
            //                     boxSize='40px'
            //                     src={feed.profileImg}
            //                     alt='Dan Abramov'
            //                 />
            //                 <div className='nickname'>{feed.author}</div>
            //             </div>
            //             <div className='card-header-right'>
            //                 <div className='share-btn'><FontAwesomeIcon icon={faShare} /></div>
            //             </div>
            //         </CardHeader>
            //         {/* 피드 내용 */}
            //         <div className='card-body'>
            //             <div className='post-image'></div>
            //                 {/* 제목 */}
            //                 <div className='title'>오운완</div>
            //                 {/* 내용 */}
            //                 <div className='feed-content'>{feed.content}</div>
            //         <div className='like-comment feed-content'> 
            //             {feed.isLiked ?
            //         <FontAwesomeIcon className='like' icon={faHeart} style={{ color: 'red', fontSize: '20px', fontWeight: 'bold'}} onClick={()=> {
            //                 clickLike(index)}}/> :	//꽉차있는 하트를 return
            //             <FontAwesomeIcon className='like' icon={faHeart} style={{ color: 'grey', fontSize: '20px'}} onClick={()=> {
            //                 clickLike(index)}}/>}
            //             <FontAwesomeIcon className='comment' icon={faComment} style={{ fontSize: '20px'}}/>
            //         </div>
            //     </div>
            //         {/* 좋아요 및 댓글 버튼 */}
            // </Card>
                ))}
            </InfiniteScroll>
        </div>
        // <div className='body'>
        //     {arr.map((item, idx) => {
        //         return (
        //         <>
            //     <Card className='card'>
            //         {/* 피드의 윗부분 (유저 아이디, 프로필 이미지, 공유 버튼)*/}
            //         <CardHeader className='card-header'> 
            //             <div className='card-header-left'>
            //                 <Image
            //                     borderRadius='full'
            //                     boxSize='40px'
            //                     src={item.profileImg}
            //                     alt='Dan Abramov'
            //                 />
            //                 <div className='nickname'>{item.author}</div>
            //             </div>
            //             <div className='card-header-right'>
            //                 <div className='share-btn'><FontAwesomeIcon icon={faShare} /></div>
            //             </div>
            //         </CardHeader>
            //         {/* 피드 내용 */}
            //         <div className='card-body'>
            //             <div className='post-image'></div>
            //                 {/* 제목 */}
            //                 <div className='title'>오운완</div>
            //                 {/* 내용 */}
            //                 <div className='feed-content'>{item.content}</div>
            //         <div className='like-comment feed-content'> 
            //             {item.isLiked ?
            //         <FontAwesomeIcon className='like' icon={faHeart} style={{ color: 'red', fontSize: '20px', fontWeight: 'bold'}} onClick={()=> {
            //                 clickLike(idx)}}/> :	//꽉차있는 하트를 return
            //             <FontAwesomeIcon className='like' icon={faHeart} style={{ color: 'grey', fontSize: '20px'}} onClick={()=> {
            //                 clickLike(idx)}}/>}
            //             <FontAwesomeIcon className='comment' icon={faComment} style={{ fontSize: '20px'}}/>
            //         </div>
            //     </div>
            //         {/* 좋아요 및 댓글 버튼 */}
            // </Card>
        // </>
        //         );
        //     })}
        // </div>
    );
}

export default Feed;