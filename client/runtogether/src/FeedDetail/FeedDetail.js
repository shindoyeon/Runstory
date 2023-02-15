import React, {useState, useEffect} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import {Box, Button, Spacer, Divider, Image, useDisclosure,
Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,
ModalBody, Card, CardBody, CardFooter, ModalFooter, Input, Avatar} from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { useParams, NavLink } from 'react-router-dom';
import axios from '../api/axios'
import Hashtags from "./Hashtags";
import BetweenBodyFooter from "../common/BetweenBodyFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // fontawesome 사용
import { faShare, faHeart, faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import axiosH from '../api/axios'

function RunningDetail(){
    const {feedId} = useParams();
    const [feeds, setFeeds] = useState([]);
    const [hashtags, setHashtags] = useState([]);
    const [feedcomments, setFeedcomments] = useState([]);
    const [user, setUser] = useState([]);
    const [feedfiles, setFeedfiles] = useState([]);
    const [isComment, setIsComment] = useState("");
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [comment, setComment] = useState("");
    const [isLiked, setIsLiked] = useState()

    useEffect(() => {
        (async () => {
            const url = "feed/detail/" + feedId;
            const data = await axios.get(url)
                .then(function(response) {
                    setFeeds(response.data.data);
                    setHashtags(response.data.data.selectedHashtags)
                    setFeedfiles(response.data.data.feedFiles[0])
                    setFeedcomments(response.data.data.feedComments[0])
                    if (response.data.data.feedComments.length === 0){
                        setIsComment("false")
                    }else{
                        setIsComment("true")
                        setUser(response.data.data.feedComments[0].simpleUserResDto)
                    }
                    if(response.data.data.feedLikeId===null) {
                        setIsLiked(false);
                    }
                    else {
                        setIsLiked(true);
                    }
                    // setUser(response.data.data.feedComments[0].simpleUserResDto)
                    // console.log(response.data.data)
                    console.log("성공");
                })
                .catch(function(error) {
                    console.log("실패");
                })
        })();
    }, []);
    var profileurl = "https://i8a806.p.ssafy.io/runstory/user/" + feeds.profileImgFileName;
    var feedurl = "https://i8a806.p.ssafy.io/runstory/feeds/" + feedfiles.filePath;
    var commenturl = "https://i8a806.p.ssafy.io/runstory/user/" + user.profileImgFileName;

    function GotoComment() {
        const url = `running/${feedId}/comment`;
        axios.get(url)
            .then(function(response) {
                console.log("성공");
            })
            .catch(function(error) {
                console.log("실패");
            })
    }

    async function postLike(feedId) {
        await axiosH({
            url: "/feed/feed-like/"+feedId,
            method: "POST"
        });
        setIsLiked(true)
    }

    async function deleteLike(feedId) {
        await axiosH({
            url: "/feed/feed-unlike/"+feedId,
            method: "DELETE"
        });
        setIsLiked(false)
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

    return (
    <div style={{marginBottom: "15%"}}>
        <Header></Header>
        <BetweenBodyFooter></BetweenBodyFooter>
        <div style={{marginBottom: '3%'}}>
            <div style={{width: "80%", margin: '0 auto', display: 'flex'}}>
                <NavLink to={"/feed/" + feeds.userId}>
                    <Avatar name='author-profile-img' src={profileurl} style={{border: "1px dotted #6A6A6A", marginRight: '3%'}} />
                </NavLink>
                {/* <img alt="" src={profileurl} width="8%" height="10%"/> */}
                <div style={{display: 'block'}}>
                    <div className="user-nickname">{feeds.regdate} 날의 피드</div>
                    <div style={{fontSize: "12px"}}>written by {feeds.userNickname}</div>
                </div>
            </div>
        </div>
        <Divider w={'80%'} m={'0 auto'} orientation='horizontal'></Divider>
        <div style={{marginTop: '3%'}}>
            <div style={{width: '100%', margin: '0 auto'}}>
                {feedurl===null? "":
                    <Image
                        border='1px solid #CBD9E7'
                        margin='0 auto'
                        marginTop='10px'
                        width='80%'
                        borderRadius='lg'
                        src={feedurl}
                        alt={feedurl}
                    />
                } 
            </div>
            <div style={{marginTop:"1%", marginLeft: "10%"}}>
                { hashtags.map(function(r){
                    return (<div className="hashtag-selected"># {r.hashtag.hashtagName}</div>)
                })}
            </div>  
        </div>
        <div style={{width: '80%', marginLeft: "10%"}}>       
                {!isLiked?
                <div style={{display: 'flex', height: '40px', justifyContent: 'end'}}>
                    <div style={{lineHeight: '40px', fontSize: '14px'}}>{feeds.feedLikeCnt}명이 이 피드를 좋아합니다.</div>
                    <FontAwesomeIcon className='like' icon={faHeart} id={feeds.feedId} style={{ color: 'grey', fontSize: '25px'}} onClick={()=>{clickLike(feeds.feedId)}}/>
                </div>
                :
                <div style={{display: 'flex', height: '40px', justifyContent: 'end'}}>
                    {feeds.feedLikeCnt===0? <div style={{lineHeight: '40px', fontSize: '14px'}}>내가 이 피드를 좋아합니다.</div>:
                    <div style={{lineHeight: '40px', fontSize: '14px'}}>나 외에 {feeds.feedLikeCnt}명이 이 피드를 좋아합니다.</div>}
                    
                    <FontAwesomeIcon className='like' icon={faHeart} id={feeds.feedId} style={{ color: 'red', fontSize: '25px', fontWeight: 'bold'}} onClick={()=>{clickLike(feeds.feedId)}}/>
                </div>}
            
        </div>
        <Divider w={'80%'} m={'0 auto'} orientation='horizontal'></Divider>
        <div style={{width: '80%', marginLeft: '10%', marginTop: '3%', marginBottom: '5%', fontSize: '16px'}}>{feeds.content}</div>
       
        <Divider w={'80%'} m={'0 auto'} orientation='horizontal'></Divider>
        {/* <p>{console.log({isComment}.isComment)}</p> */}
        <div>
        {
            {isComment}.isComment === "true" ?
                (<div>
                    <HStack spacing='24px'>
                        <img alt = "" src={commenturl} width="20%"/>
                        <p>{user.userNickname}</p>
                        <p>{feedcomments.content}</p>
                        <p>{feedcomments.regdate}</p>
                        <div>
                            <div style={{width: "80%", marginLeft: '10%', marginTop: "7%" }} onClick={GotoComment}>💬 댓글 보기</div>
                        </div>
                    </HStack>
                </div>)
            : 
            (<div>
                <p>댓글 달아라! 좀! </p>
            </div>)
        }
        </div>
      <Footer></Footer>
    </div>
  );
}

export default RunningDetail;
