import React from 'react';
import './Feed.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // fontawesome 사용
import { faShare } from "@fortawesome/free-solid-svg-icons"; // 공유 버튼
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons"; // 하트(좋아요), 댓글 버튼

import {
    ChakraProvider,
    theme,
    Card, // chakra-ui의 Card로 피드 하나를 구성할 것임 
    CardHeader
  } from '@chakra-ui/react';

const Feed = () => {
    return (
        <div className='body'>
            <ChakraProvider theme={theme} textAlign='center' className='body'>
                {/* 피드 하나 */}
                <Card className='card'>
                    {/* 피드의 윗부분 (유저 아이디, 프로필 이미지, 공유 버튼)*/}
                    <CardHeader className='card-header'> 
                        <div className='card-header-left'>
                            <div className='profile-img'></div>
                            <div className='nickname'>taeyoon_kk</div>
                        </div>
                        <div className='card-header-right'>
                            <div className='share-btn'><FontAwesomeIcon icon={faShare} /></div>
                        </div>
                    </CardHeader>
                    {/* 피드 내용 */}
                    <div className='card-body'>
                        <div className='post-image'></div>
                            {/* 제목 */}
                            <div className='title'>오운완</div>
                            {/* 내용 */}
                            <div className='feed-content'>내일 같이 운동하실 분 계신가요????</div>
                    </div>
                    {/* 좋아요 및 댓글 버튼 */}
                    <div className='like-comment'>
                        <FontAwesomeIcon className='like' icon={faHeart} />
                        <FontAwesomeIcon className='comment' icon={faComment} />
                    </div>
                </Card>
                <Card className='card'>
                    <CardHeader className='card-header'>
                        <div className='card-header-left'>
                            <div className='profile-img'></div>
                            <div className='nickname'>taeyoon_kk</div>
                        </div>
                        <div className='card-header-right'>
                            <div className='share-btn'><FontAwesomeIcon icon={faShare} /></div>
                        </div>
                    </CardHeader>
                    <div className='card-body'>
                        <div className='post-image'></div>
                            <div className='title'>오운완</div>
                            <div className='feed-content'>내일 같이 운동하실 분 계신가요????</div>
                    </div>
                    <div className='like-comment'>
                        <FontAwesomeIcon className='like' icon={faHeart} />
                        <FontAwesomeIcon className='comment' icon={faComment} />
                    </div>
                </Card>
                <Card className='card'>
                    <CardHeader className='card-header'>
                        <div className='card-header-left'>
                            <div className='profile-img'></div>
                            <div className='nickname'>taeyoon_kk</div>
                        </div>
                        <div className='card-header-right'>
                            <div className='share-btn'><FontAwesomeIcon icon={faShare} /></div>
                        </div>
                    </CardHeader>
                    <div className='card-body'>
                        <div className='post-image'></div>
                            <div className='title'>오운완</div>
                            <div className='feed-content'>내일 같이 운동하실 분 계신가요????</div>
                    </div>
                    <div className='like-comment'>
                        <FontAwesomeIcon className='like' icon={faHeart} />
                        <FontAwesomeIcon className='comment' icon={faComment} />
                    </div>
                </Card>
                <Card className='card'>
                    <CardHeader className='card-header'>
                        <div className='card-header-left'>
                            <div className='profile-img'></div>
                            <div className='nickname'>taeyoon_kk</div>
                        </div>
                        <div className='card-header-right'>
                            <div className='share-btn'><FontAwesomeIcon icon={faShare} /></div>
                        </div>
                    </CardHeader>
                    <div className='card-body'>
                        <div className='post-image'></div>
                            <div className='title'>오운완</div>
                            <div className='feed-content'>내일 같이 운동하실 분 계신가요????</div>
                    </div>
                    <div className='like-comment'>
                        <FontAwesomeIcon className='like' icon={faHeart}/>
                        <FontAwesomeIcon className='comment' icon={faComment} />
                    </div>
                </Card>
            </ChakraProvider>
        </div>
    );
}

export default Feed;