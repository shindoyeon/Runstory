import React, { useState, useEffect } from 'react'
import {
    Divider,
    Box,
    Avatar,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react';
import Info from './Info'
import ProfileFeed from './ProfileFeed';
import ProfileMsg from './ProfileMsg';
import Header from '../common/Header';
import Footer from '../common/Footer';
import BetweenBodyFooter from '../common/BetweenBodyFooter';
import './Feed.css'
import axios from '../api/axios';

import {useNavigate} from 'react-router-dom'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link,useParams} from 'react-router-dom'
import ChattingRoom from '../Chatting/ChattingRoom';


// 개인피드페이지 -> 사용자 본인이면 햄버거 / 타인의 피드페이지면 햄버거x 팔로우, 차단버튼
// 개인피드페이지
// ~~의 페이지임을 명시
const Profile = () => {
    const accessToken = localStorage.getItem("access-token");

    const {userId} = useParams();

    const {isOpen, onOpen, onClose} = useDisclosure();

    const [follower, setFollower] = useState(0);
    const [following, setFollowing] = useState(0);
    const [followingStatus, setFollowingStatus] = useState(false);
    const [followId , setFollowId] = useState(null);    
    const [isMypage, setIsMypage] = useState(false);
    const [feedMaster, setFeedMaster] = useState();
    const [level, setLevel] = useState();
    const [nickname, setNickname] = useState();
    const [profileImg, setProfileImg] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("access-token") === null) { // 비회원 -> 로그인
            navigate("/user/login");
        }

        (async () => { // 피드 주인
            const data = await axios.get(
                "https://i8a806.p.ssafy.io/api/feed/profile/" + userId,
            );
            setFeedMaster(data.data.data)
            setLevel(data.data.data.level);
            setNickname(data.data.data.userNickName);
            setProfileImg("http://i8a806.p.ssafy.io/runstory/user/"+data.data.data.profileImgFileName);
        })();
    }, []);
    
    useEffect(() => {
        (async () => {
            const data = await axios.get(
                "https://i8a806.p.ssafy.io/api/feed/followstatus/" + userId, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            
            setFollowId(data.data.data.followId);
            setFollowing(data.data.data.follwingCnt);
            setFollower(data.data.data.follwerCnt);
            setFollowingStatus(data.data.data.followStatus);
        })();
    }, [followingStatus]);

    useEffect(() => {
        (async () => {
            const data = await axios.get(
                "/user"
            );
            if(data.data.data.userSeq == userId){
                setIsMypage(true);
            }   
        })();

    }, []);

        
    const follow =  (async () => {
        //아직 팔로우 안 한 경우
        
        if(!followingStatus){
                const data = await axios.post(
                    "https://i8a806.p.ssafy.io/api/feed/follow/" + userId, {},{
                        headers: {
                            Authorization: `Bearer ${accessToken}`

                        }
                    }
                );
                // followid 저장하기
                setFollowId(data.data.data);

        //이미 팔로우 한 경우
        } else {
            await axios.delete(
                "https://i8a806.p.ssafy.io/api/feed/follow/" + followId
            );

            setFollowId(null);
        }
        setFollowingStatus(!followingStatus);
    })
    
    const navigateFollow = () => { // 클릭 시 팔로우리스트페이지로 이동
        navigate("/feed/follow/"+userId);
    };

    // 로그아웃
    function logout() {
        localStorage.removeItem('access-token');
        navigate("/");
    }

    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose} size='xs' isCentered>
                <ModalOverlay />
                <ModalContent>
                    {/* <ModalHeader>⚙</ModalHeader> */}
                    <ModalCloseButton />
                    <ModalBody style={{margin: '0 auto', width: '100%', marginTop: '30px'}}>
                        <div style={{width: '100%'}}>
                            <Divider mt='5px' w='100%' mb='5px'/>
                            <Link to="/setting-block">
                                <div style={{fontSize:'20px', textAlign: 'center'}}> 
                                    차단설정
                                </div>
                            </Link>
                            <Divider mt='5px' w='100%' mb='5px'/>
                            <Link to="/setting-alarm">
                                <div style={{fontSize:'20px', textAlign: 'center'}}> 
                                    알림설정
                                </div>
                            </Link>
                            <Divider mt='5px' w='100%' mb='5px'/>
                            <Link to="/setting-question">
                                <div style={{fontSize:'20px', textAlign: 'center'}}> 
                                    문의하기
                                </div>
                            </Link>
                            <Divider mt='5px' w='100%' mb='5px'/>
                            <div style={{fontSize:'20px', textAlign: 'center', color: 'red'}} onClick={logout}> 
                                로그아웃
                            </div>
                            <Divider mt='5px' w='100%' mb='5px'/>
                        </div>
                    </ModalBody>
                    </ModalContent>
            </Modal>
            <Header></Header>
            <p style={{textAlign: 'right', marginRight: '5%', marginBottom: '10px', marginTop: '55px', fontSize: '20px'}}><FontAwesomeIcon onClick={onOpen} icon={faBars} /></p>
            <Box direction={{base: 'row'}} style={{display: 'flex', width: '95%', margin: '0 auto', height: '120px', marginBottom: '10px'}}>
                <Avatar 
                    isCentered
                    size={'xl'}
                    src={profileImg}
                    style={{border: '2px solid #6A6A6A'}} />
                <div className='info' style={{display: 'block', textAlign: 'center', paddingLeft: '5%'}}> 
                    <div className='user-nickname' style={{fontSize: '20px'}}>
                        {nickname} 님의 피드
                        { !isMypage && !followingStatus && <div className='follow-btn' onClick={follow}>팔로우</div> }
                        { !isMypage && followingStatus && <div className='unfollow-btn' onClick={follow}>언팔로우</div> }
                        <ChattingRoom yourSeq={userId} yourNickname={nickname}></ChattingRoom>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '10px'}}>
                        <button onClick={navigateFollow} style={{display: 'block'}}>
                            <div className="follower">{follower}</div>
                            <div className="follower">팔로워</div>
                        </button>
                        <div onClick={navigateFollow} style={{display: 'block'}}>
                            <div className="following">{following}</div>
                            <div className="following">팔로잉</div>
                        </div>
                        
                    </div>
                    
                </div>
            </Box>
            <Divider></Divider>
            <ProfileFeed userId={userId}></ProfileFeed>
            <Footer></Footer>
        </div >
    )
}

export default Profile;