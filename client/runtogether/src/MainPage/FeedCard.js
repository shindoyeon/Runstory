import {
    Card, // chakra-ui의 Card로 피드 하나를 구성할 것임 
    CardHeader,
    Image,
    Modal,
    useDisclosure,
    ChakraProvider,
    Divider
  } from '@chakra-ui/react';
  import React, {useState, useEffect} from 'react';
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // fontawesome 사용
  import { faShare, faHeart, faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
  import { faComment } from "@fortawesome/free-regular-svg-icons";
  import './Feed.css';
  import Comment from './Comment';
  import axios from '../api/axios';
  import { NavLink, Link } from 'react-router-dom';

  function FeedCard(props) {
    const feed = props.feed;
    // console.log(feed)
    // var fileSrc = feed.feedFiles[0].fileName+feed.feedFiles[0].filePath;
    

    async function postLike(feedId) {
        await axios({
            url: "/feed/feed-like/"+feedId,
            method: "POST"
        });
    }

    async function deleteLike(feedId) {
        await axios({
            url: "/feed/feed-unlike/"+feedId,
            method: "DELETE"
        });
    }

    const clickLike = (feedId) => {
        // e.preventDefault();
        var color = document.getElementById(feedId).style.color;
        if(color==='grey') {
            document.getElementById(feedId).style.color='red';
            postLike(feedId);
            // 좋아요 POST
        }
        else {
            document.getElementById(feedId).style.color='grey';
            deleteLike(feedId);
            // 좋아요 DELETE
        }
    }


  // 게시글이 길 때, 컨텐츠를 보이게 했다 안 보이게 했다 하는 함수
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

    // 모달창을 열기 위한 변수
    const { isOpen, onOpen, onClose } = useDisclosure();
    const comments = feed.feedComments;

    return (
    <div height="50vh" margin='0 auto'>
        <ChakraProvider height='5vh'>
            <Modal isCentered isOpen={isOpen} onClose={onClose} size='xs' className='modal' scrollBehavior='inside' height={'10vh'}>
                <Comment comments={comments} feedId={feed.feedId}></Comment>
            </Modal>
            </ChakraProvider>
        <Card className='card' variant='outline' boxShadow='rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;'>
                    {/* 피드의 윗부분 (유저 아이디, 프로필 이미지, 공유 버튼)*/}
                    <CardHeader className='card-header' > 
                        <div className='card-header-left'>
                            <Link to={"/feed"} state={{userId: feed.userId}}>
                                <Image
                                    borderRadius='full'
                                    boxSize='40px'
                                    src={feed.profileImgFilePath}
                                    alt='Dan Abramov'
                                    />
                            </Link>
                            <div className='nickname'>{feed.userNickname}</div>
                        </div>
                    </CardHeader>
                    {/* 피드 내용 */}
                    <div className='card-body'>
                    {feed.feedFiles.map((item2, idx) => {
                        var fileSrc = "http://i8a806.p.ssafy.io/runstory/feeds/"+item2.filePath
                        return(
                            <NavLink to={"/feed/detail/" + feed.feedId}>
                            <Image
                                border='1px solid #CBD9E7'
                                margin='0 auto'
                                marginTop='10px'
                                width='90%'
                                borderRadius='lg'
                                src={fileSrc}
                                alt=""
                            />
                            </NavLink>
                        )
                    })}
                            {/* 내용 */}
                        {/* <div className="feed-content">{feed.content}</div> */}
                        <div className='feed-content' onClick={moreContent}>{feed.content}</div>
                    <div className='like-comment'> 
                    <Divider></Divider>
                        {feed.feedLikeId===null ?
                        <FontAwesomeIcon className='like' icon={faHeart} id={feed.feedId} style={{ color: 'grey', fontSize: '25px'}} onClick={()=>{clickLike(feed.feedId)}}/>:
                        <FontAwesomeIcon className='like' icon={faHeart} id={feed.feedId} style={{ color: 'red', fontSize: '25px', fontWeight: 'bold'}} onClick={()=>{clickLike(feed.feedId)}}/>}
                        <FontAwesomeIcon className='comment' icon={faComment} style={{ fontSize: '25px'}} onClick={onOpen}/>
                    </div>
                </div>
                    {/* 좋아요 및 댓글 버튼 */}
            </Card>
        </div>
    );
  }
  export default FeedCard;