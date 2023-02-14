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
                    console.log(response.data.data)
                    console.log(response.data.data.feedFiles[0].filePath)
                    console.log("성공");
                })
                .catch(function(error) {
                    console.log("실패");
                })
        })();
    }, []);
    var profileurl = "https://i8a806.p.ssafy.io/runstory/user/" + feeds.profileImgFileName;
    var feedurl = "https://i8a806.p.ssafy.io/runstory/feeds/" + feedfiles.filePath;
    // var dibsurl = `https://i8a806.p.ssafy.io/api/running/${runningId}/dibs`;

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
                        console.log(r.hashtag.hashtagName)
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
                <p>{feedcomments.userId}</p>
               <p>{feedcomments.content}</p>
            </HStack>
        </div>
        {/* <div style={{marginTop:"15%", marginLeft:"6%", marginRight:"6%"}}>
            <div>
            <p>러닝 크루 상세</p>
            </div>
            <div style={{  position: "relative", width: "300px", height: "200px", overflow: "hidden", textAlign : "center"}}>
                <img alt={url}
                     src= {url}
                     className="chakra-image css-11lcdup" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover"}} />
            </div>
            <div style={{marginTop:"5%"}}>
                <HStack spacing='24px'>
                    { hashtags.map(function(r){
                        console.log(r.hashtag.hashtagName)
                        return (<div style={{textAlign:"center", background: "rgb(192,192,192)", paddingLeft: "3%", paddingRight:"3%", borderRadius:"30px"}}>{r.hashtag.hashtagName}</div>)
                    })}
                </HStack>
            </div>
            <div style={{marginTop:"15%", marginBottom:"8%"}}>
                <HStack spacing='24px'>
                    <div>
                        <Box w='170px' bg='teal.500' style={{ background: "white", borderBottom:"0px "}}> {runnings.crewName}</Box>
                        <p style={{borderTop:"0px"}}>{runnings.userNickName}</p>
                    </div>
                    <Spacer />
                    {runnings.validation 
                    ? null
                    : <button style={{textAlign:"center", background: "rgb(192,192,192)", paddingLeft: "3%", paddingRight:"3%", borderRadius:"30px"}} onClick={Authentication}> 인증 </button>
                    }
                </HStack>
            </div>

            <div>
                <blockquote>
                    {runnings.runningContent}
                </blockquote>
            </div>
            <div style={{marginTop:"10%"}}>
                <p>{runnings.startLocation}</p>
                <p>남자 : {runnings.man} / 여자 : {runnings.women} / 상관없음 : {runnings.total}</p>
                <p>{runnings.startTime} - {runnings.endTime}</p>
            </div>
            <div style={{marginTop:"10%", marginBottom:"8%"}}>
                <HStack spacing='24px'>
                    <Spacer />
                    <BooleanRunning Something={runnings.runner} truevalue="예약취소" falsevalue= "예약하기" api={reservation} id = {runningId}/>
                    <BooleanRunning Something={runnings.dibs} truevalue="찜하기취소" falsevalue= "찜하기" api={dibsurl} id = {runningId}/>
                </HStack>
            </div>
            <div style={{marginBottom:"2%"}}>
                <HStack spacing='24px'>
                    <Box w='70px' h='6' bg='teal.500' style={{textAlign:"center", background: "white", textDecoration:"underline" }}> 댓글  </Box>
                    <Spacer />
                    <Box w='70px' h='6' bg='teal.500' style={{textAlign:"center", background: "rgb(192,192,192)", paddingLeft: "3%", paddingRight:"3%", borderRadius:"30px"}}> + </Box>
                </HStack>
            </div>
            <div>
                {
                    comments.map(function(comment){
                        var url = "https://i8a806.p.ssafy.io/runstory/user/" + comment.profileImgName;
                        return (
                        <div style={{textAlign:"center", background: "grey", height:"100px", marginBottom:"20px", padding:"3%", background: "rgb(192,192,192)", borderRadius:"20px"}}>
                            <div style={{marginBottom:"5%"}}>
                            <HStack spacing='24px'>
                                <img alt="" src={url} width="8%" height="10%"/>
                                <Box w='150px' h='6' bg='teal.500' style={{background: "rgb(192,192,192)" }}> {comment.userNickName}  </Box>
                                <Spacer />
                                <Box w='150px' h='6' bg='teal.500' style={{textAlign:"center", background: "rgb(192,192,192)", paddingLeft: "3%", paddingRight:"3%", borderRadius:"30px"}}> {comment.regdate} </Box>
                            </HStack>
                            </div>
                            <div style={{background: "rgb(192,192,192)"}}>
                                {comment.content}
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div> */}
      <Footer></Footer>
    </div>
  );
}

export default RunningDetail;
