import React, {useState, useEffect} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import {Box, Spacer} from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import BooleanRunning from "./BooleanRunning";

function RunningDetail(){
    const {runningId} = useParams();
    let [runnings, setRunnings] = useState([]);

    useEffect(() => {
        (async () => {
            const url = `https://i8a806.p.ssafy.io/api/running/detail/${runningId}`;
            const data = await axios.get(url)
                .then(function(response) {
                    setRunnings(response.data);
                    console.log("성공");
                })
                .catch(function(error) {
                    console.log("실패");
                })
        })();
    }, []);

    return (
    <div>
      <Header></Header>
        <div style={{marginTop:"16%", marginLeft:"6%", marginRight:"6%"}}>
            <div>
            <p>러닝 크루 상세</p>
            </div>
            <div style={{  position: "relative", width: "300px", height: "200px", overflow: "hidden", textAlign : "center"}}>
                <img alt="여기는 러닝크루 이미지입니다."
                     src="http://i8a806.p.ssafy.io/runstory/feeds/6b341afb-2a16-49ad-a8bc-265bc015cc1aimages.jfif"
                     className="chakra-image css-11lcdup" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover"}} />
            </div>
            <div style={{marginTop:"5%"}}>
                <HStack spacing='24px'>
                    <button style={{textAlign:"center", background: "grey"}}>hastag1</button>
                    <button style={{textAlign:"center", background: "grey"}}>hastag2 </button>
                    <button style={{textAlign:"center", background: "grey"}}> hastag3</button>
                </HStack>
            </div>
            <div style={{marginTop:"15%", marginBottom:"8%"}}>
                <HStack spacing='24px'>
                    <div>
                        <Box w='170px' bg='teal.500' style={{ background: "white", borderBottom:"0px "}}> 같이 뛰실 분  구해요</Box>
                        <p style={{borderTop:"0px"}}>이름</p>
                    </div>
                    <Box w='70px' h='6' bg='teal.500' style={{textAlign:"center", background: "grey"}}> 인증  </Box>
                    <Box w='70px' h='6' bg='teal.500' style={{textAlign:"center", background: "grey"}}> 채팅방</Box>
                </HStack>
            </div>

            <div>
                <blockquote>
                    안녕하세요?
                    저는 같이 뛰고 싶은 사람이예요.
                </blockquote>
            </div>
            <div style={{marginTop:"10%"}}>
                <p>서울특별시 0000</p>
                <p>3/5</p>
                <p>2013.0000. - 2014.0000 .000S</p>
            </div>
            <div style={{marginTop:"10%", marginBottom:"8%"}}>
                <HStack spacing='24px'>
                    <Spacer />
                    <BooleanRunning Something="true" truevalue="예약취소" falsevalue= "예약하기" />
                    <BooleanRunning Something="false" truevalue="찜하기취소" falsevalue= "찜하기" />
                </HStack>
            </div>
            <div>
                <HStack spacing='24px'>
                    <Box w='70px' h='6' bg='teal.500' style={{textAlign:"center", background: "white", textDecoration:"underline" }}> 댓글  </Box>
                    <Spacer />
                    <Box w='70px' h='6' bg='teal.500' style={{textAlign:"center", background: "grey"}}> + </Box>
                </HStack>
            </div>

        </div>
      <Footer></Footer>
    </div>
  );
}

export default RunningDetail;
