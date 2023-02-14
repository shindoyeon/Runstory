import React, {useState, useEffect} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import {Box, Button, Spacer} from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios'

function RunningDetail(){
    const {feedId} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const url = "feed/comment/" + feedId;
            const data = await axios.get(url)
                .then(function(response) {
                    setComments(response.data.data);
                    console.log(response.data.data)
                    console.log("성공");
                })
                .catch(function(error) {
                    console.log("실패");
                })
        })();
    }, []);
    // var profileurl = "https://i8a806.p.ssafy.io/runstory/user/" + feeds.profileImgFileName;
    // var feedurl = "https://i8a806.p.ssafy.io/runstory/feeds/" + feedfiles.filePath;
    // var commentsurl = "https://i8a806.p.ssafy.io/runstory/user/" + user.profileImgFileName;

    return (
    <div style={{marginBottom: "15%"}}>
        <Header></Header>
        <div style={{marginTop:"15%", borderBottom:"5%"}}>
            { 
                comments.map(function(r){
                    var url = "https://i8a806.p.ssafy.io/runstory/user/" + r.simpleUserResDto.profileImgFileName;
                    return (
                        <div style={{textAlign:"center", background: "rgb(192,192,192)", paddingLeft: "3%", paddingRight:"3%", borderRadius:"30px"}}>
                            <div>
                                <HStack spacing='24px'>
                                    <img alt='헤헷' src={url} width="10%"/>      
                                    <p>{r.simpleUserResDto.userNickname}</p>
                                </HStack>
                            </div>
                            <div>
                            {r.content}
                            </div>
                            <div>
                            {r.feedRecomments.map(function(recomment){
                                var recommenturl = "https://i8a806.p.ssafy.io/runstory/user/" + recomment.simpleUserResDto.profileImgFileName;
                                return(<div style={{marginLeft:"50px"}}>
                                    <div>
                                        <HStack spacing='24px'>
                                            <img alt={recomment.simpleUserResDto.profileImgFileName} src={recommenturl} width="10%"/>
                                            <p>{recomment.simpleUserResDto.userNickname}</p>
                                        </HStack>
                                    </div>
                                    {recomment.content}
                                    {recomment.regdate}
                                </div>)
                            })
                            }
                            </div>
                        </div>
                    )
                })}
        </div>
      <Footer></Footer>
    </div>
  );
}

export default RunningDetail;
