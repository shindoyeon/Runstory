import React, {useState, useEffect} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import {Box, Button, Spacer} from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios'
import BooleanRunning from "./BooleanRunning";
import Hashtags from "./Hashtags";

function RunningDetail(){
    const {feedId} = useParams();
    const [feeds, setFeeds] = useState([]);
    const [hashtags, setHashtags] = useState([]);
    const [feedcomments, setFeedcomments] = useState([]);
    const [user, setuser] = useState([]);
    const [feedfiles, setFeedfiles] = useState([]);

    useEffect(() => {
        (async () => {
            const url = "feed/detail/" + feedId;
            const data = await axios.get(url)
                .then(function(response) {
                    setFeeds(response.data.data);
                    setHashtags(response.data.data.selectedHashtags)
                    setFeedcomments(response.data.data.feedComments[0])
                    setFeedfiles(response.data.data.feedFiles[0])
                    setuser(response.data.data.feedComments[0].simpleUserResDto)
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
    var commentsurl = "https://i8a806.p.ssafy.io/runstory/user/" + user.profileImgFileName;

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
        <div>
            <HStack spacing='24px'>
                <img alt = "{user.profileImgFileName}" src={commentsurl}/> 
                <p>{user.userNickname}</p>
                <p>{feedcomments.content}</p>
                <button onClick={GotoComment}>버튼임.</button>
            </HStack>
        </div>
      <Footer></Footer>
    </div>
  );
}

export default RunningDetail;
