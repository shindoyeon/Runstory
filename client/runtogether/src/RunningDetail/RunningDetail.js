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
    const {runningId} = useParams();
    const [runnings, setRunnings] = useState([]);
    const [hashtags, setHashtags] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const url = "running/detail/" + runningId;
            const data = await axios.get(url)
                .then(function(response) {
                    setRunnings(response.data.data);
                    setHashtags(response.data.data.selectedHashtags)
                    setComments(response.data.data.runningboardcomments)
                    console.log(response);
                    console.log("성공");
                })
                .catch(function(error) {
                    console.log("실패");
                })
        })();
    }, []);
    var url = "https://i8a806.p.ssafy.io/runstory/running/" + runnings.imgFileName;
    var reservation = `https://i8a806.p.ssafy.io/api/running/${runningId}/reservations`;
    var dibsurl = `https://i8a806.p.ssafy.io/api/running/${runningId}/dibs`;


    function Authentication() {
        const url = `running/${runningId}/valid`;
        axios.get(url)
            .then(function(response) {
                console.log("성공");
            })
            .catch(function(error) {
                console.log("실패");
            })

    }
    return (
    <div>
      <Header></Header>
        <div style={{marginTop:"15%", marginLeft:"6%", marginRight:"6%"}}>
            <div>
                {runnings.crewName}
            </div>
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
                    {/*{runnings.selectedHashtags.map(function (hashtagname) {*/}
                    {/*    return (<div>{hashtagname["hashtag"]["hashtagName"]}</div>)})}*/}
                    {/*{*/}
                    {/*    runnings.selectedHashags.map(function(hashtagname){*/}
                    {/*        return (<button style={{textAlign:"center", background: "rgb(192,192,192)", paddingLeft: "3%", paddingRight:"3%", borderRadius:"30px"}}>{hashtagname.hashtag.hashtagName*/}
                    {/*        }</button>)*/}
                    {/*    })*/}
                    {/*}*/}
                </HStack>
            </div>
            <div style={{marginTop:"15%", marginBottom:"8%"}}>
                <HStack spacing='24px'>
                    <div>
                        <Box w='170px' bg='teal.500' style={{ background: "white", borderBottom:"0px "}}> {runnings.runningContent}</Box>
                        <p style={{borderTop:"0px"}}>{runnings.userId}</p>
                    </div>
                    <Spacer />
                    <button style={{textAlign:"center", background: "rgb(192,192,192)", paddingLeft: "3%", paddingRight:"3%", borderRadius:"30px"}} onClick={Authentication}> 인증  </button>
                </HStack>
            </div>

            <div>
                <blockquote>
                    {runnings.runningContent}
                </blockquote>
            </div>
            <div style={{marginTop:"10%"}}>
                <p>{runnings.startLocation}</p>
                <p>3/5</p>
                <p>{runnings.startTime} - {runnings.endTime}</p>
            </div>
            <div style={{marginTop:"10%", marginBottom:"8%"}}>
                <HStack spacing='24px'>
                    <Spacer />
                    <BooleanRunning Something={runnings.runner} truevalue="예약취소" falsevalue= "예약하기" api={reservation}/>
                    <BooleanRunning Something={runnings.dibs} truevalue="찜하기취소" falsevalue= "찜하기" api={dibsurl} />
                </HStack>
            </div>
            <div style={{marginBottom:"15%"}}>
                <HStack spacing='24px'>
                    <Box w='70px' h='6' bg='teal.500' style={{textAlign:"center", background: "white", textDecoration:"underline" }}> 댓글  </Box>
                    <Spacer />
                    <Box w='70px' h='6' bg='teal.500' style={{textAlign:"center", background: "rgb(192,192,192)", paddingLeft: "3%", paddingRight:"3%", borderRadius:"30px"}}> + </Box>
                </HStack>
            </div>
            <div>
                <HStack spacing='24px'>
                    <Box w='70px' h='6' bg='teal.500' style={{textAlign:"center", background: "white", textDecoration:"underline" }}> 댓글  </Box>
                    <Spacer />
                    <Box w='70px' h='6' bg='teal.500' style={{textAlign:"center", background: "rgb(192,192,192)", paddingLeft: "3%", paddingRight:"3%", borderRadius:"30px"}}> + </Box>
                </HStack>
            </div>
            <div style={{marginTop:"20px"}}>
                {
                    comments.map(function(comment){
                        return (<div style={{textAlign:"center", background: "grey", height:"100px", marginBottom:"20px"}}>{comment}</div>)
                    })
                }
            </div>
        </div>
      <Footer></Footer>
    </div>
  );
}

export default RunningDetail;
