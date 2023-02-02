import {
    Card, // chakra-ui의 Card로 피드 하나를 구성할 것임 
    CardHeader,
    Image,
    Divider
  } from '@chakra-ui/react';
  import React, {useState} from 'react';
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // fontawesome 사용
  import { faShare, faHeart, faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
  import { faComment } from "@fortawesome/free-regular-svg-icons";
  import './Feed.css';

  function FeedCard(props) {
    const feed = props.feed;
    const clickLike = id => {
        console.log(id)
  }

  function moreContent(e) {
    if(e.target.classList.contains("feed-content-open")) {
        e.target.classList.remove('feed-content-open');
        e.target.classList.add('feed-content');
    }
    else {
        e.target.classList.remove('feed-content')
        e.target.classList.add('feed-content-open')
    }
  }


    return (
    <div height="50vh" margin='0 auto'>
        <Card className='card' variant='outline' boxShadow='rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;'>
                    {/* 피드의 윗부분 (유저 아이디, 프로필 이미지, 공유 버튼)*/}
                    <CardHeader className='card-header' > 
                        <div className='card-header-left'>
                            <Image
                                borderRadius='full'
                                boxSize='40px'
                                src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                                alt='Dan Abramov'
                                />
                            <div className='nickname'>{feed.userNickname}</div>
                        </div>
                    </CardHeader>
                    {/* 피드 내용 */}
                    <div className='card-body'>
                        <Image
                                border='1px solid #CBD9E7'
                                margin='0 auto'
                                marginTop='10px'
                                width='90%'
                                borderRadius='lg'
                                src={feed.feedFiles}
                        /> 
                            {/* 내용 */}
                        {/* <div className="feed-content">{feed.content}</div> */}
                        <div className='feed-content' onClick={moreContent}>{feed.content}</div>
                    <div className='like-comment'> 
                        <Divider></Divider>
                        {feed.isLiked ?
                        <FontAwesomeIcon className='like' icon={faHeart} style={{ color: 'red', fontSize: '25px', fontWeight: 'bold'}} onClick={()=> {
                            clickLike(feed.feedId)}}/> :    //꽉차있는 하트를 return
                        <FontAwesomeIcon className='like' icon={faHeart} style={{ color: 'grey', fontSize: '25px'}} onClick={()=> {
                            clickLike(feed.feedId)}}/>}
                        {/* <FontAwesomeIcon className='comment' icon={faComment} style={{ fontSize: '25px'}} onClick={onOpen}/> */}
                    </div>
                </div>
                    {/* 좋아요 및 댓글 버튼 */}
            </Card>
        </div>
    );
  }
  export default FeedCard;