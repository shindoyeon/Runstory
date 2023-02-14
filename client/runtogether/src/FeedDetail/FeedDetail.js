import React, {useState, useEffect} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import {Box, Button, Spacer} from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios'
import Hashtags from "./Hashtags";

function RunningDetail(){
    const {feedId} = useParams();
    const [feeds, setFeeds] = useState([]);
    const [hashtags, setHashtags] = useState([]);
    const [feedcomments, setFeedcomments] = useState([]);
    const [user, setUser] = useState([]);
    const [feedfiles, setFeedfiles] = useState([]);
    const [isComment, setIsComment] = useState("");
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
                    // setUser(response.data.data.feedComments[0].simpleUserResDto)
                    console.log(response.data.data)
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

    return (
    <div style={{marginBottom: "15%"}}>
        <Header></Header>
        <div style={{marginTop:"15%", borderBottom:"5%"}}>
            <HStack spacing='24px'>
                <img alt="" src={profileurl} width="8%" height="10%"/>
                <p>{feeds.userNickname}</p>
                <p>{feeds.regdate}</p>
            </HStack>
        </div>
        <div>
            <img alt = {feedfiles.filePath} src = {feedurl} />
        </div>
        <div style={{marginTop:"5%"}}>
                <HStack spacing='24px'>
                    { hashtags.map(function(r){
                        return (<div style={{textAlign:"center", background: "rgb(192,192,192)", paddingLeft: "3%", paddingRight:"3%", borderRadius:"30px"}}>{r.hashtag.hashtagName}</div>)
                    })}
                </HStack>
        </div>
        <div>
            {feeds.feedLikeCnt}명이 좋아합니다.
        </div>
        <div>
            {feeds.content}
        </div>
        <div>
            <p style={{textDecoration: "underline"}}>댓글</p>
        </div>
        <p>{isComment}</p>
        <p>{console.log({isComment}.isComment)}</p>
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
