import React, {useState, useEffect} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import {Avatar, Box, Button, ChakraProvider, Spacer} from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios'
import { ChevronRightIcon } from '@chakra-ui/icons';

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
        <ChakraProvider>
          <Header></Header>
          <div className='block-title'>
                <div style={{marginTop:"15%", borderBottom:"5%"}}>
                    <div style={{marginBottom:"5%"}}>
                        댓글
                    </div>
                    { 
                        comments.map(function(r){
                            var url = "https://i8a806.p.ssafy.io/runstory/user/" + r.simpleUserResDto.profileImgFileName;
                            return (
                                <div style={{paddingLeft: "3%", paddingRight:"3%", borderRadius:"30px", marginBottom:"5%"}}>
                                    <div style={{borderRadius:"10px", backgroundColor:"#E1EBFF"}}>
                                        <div style={{borderRadius:"10px", backgroundColor:"#E1EBFF"}}>
                                            <HStack spacing='24px'>
                                                <Avatar 
                                                    isCentered
                                                    size={'xs'}
                                                    src={url}
                                                    style={{border: '2px solid #6A6A6A'}} />  
                                                <div style={{marginLeft:"5%", marginTop:"0px", fontSize:"13px"}}>{r.simpleUserResDto.userNickname}</div>
                                            </HStack>
                                        </div>
                                        <div style={{paddingLeft:"10%"}}>
                                            {r.content}
                                        </div>
                                    </div>
                                    <hr style={{margin:"10px"}} />
                                    <div>
                                    {r.feedRecomments.map(function(recomment){
                                        var recommenturl = "https://i8a806.p.ssafy.io/runstory/user/" + recomment.simpleUserResDto.profileImgFileName;
                                        return(
                                            <div style={{marginLeft:"50px", marginBottom:"1%"}}>
                                            <div style={{borderRadius:"10px", backgroundColor:"#E1EBFF"}}>
                                                <div>
                                                    <HStack spacing='24px'>
                                                        <ChevronRightIcon />
                                                        <Avatar 
                                                        isCentered
                                                        size={'xs'}
                                                        src={recommenturl}
                                                        style={{border: '2px solid #6A6A6A'}} />  
                                                    <div style={{marginLeft:"5%", fontSize:"13px"}}>{recomment.simpleUserResDto.userNickname}</div>
                                                    </HStack>
                                                </div>
                                                <div style={{marginLeft:"30%"}}>
                                                    {recomment.content}
                                                </div>
                                            </div>
                                                {/* {recomment.regdate} */}
                                            </div>
                                        )
                                    })
                                    }
                                    </div>
                                </div>
                            )
                        })}
                </div>
          </div>
          <Footer></Footer>
        </ChakraProvider>
      )
}

export default RunningDetail;
