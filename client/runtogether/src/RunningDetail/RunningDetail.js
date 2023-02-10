import React, {useState, useEffect} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Box } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from "axios";

function RunningDetail(){
    const {runningId} = useParams();
    let [runnings, setRunnings] = useState([]);

    useEffect(() => {
        (async () => {
            const url = `https://localhost:8080/running/detail/${runningId}`;
            const data = await axios.get(url)
                .then(function(response) {
                    setRunnings(response.data);
                    console.log(setRunnings())
                    console.log("성공");
                })
                .catch(function(error) {
                    console.log("실패");
                })
        })();
    }, []);

    return (
    <div style={{width: "90%"}}>
      <Header></Header>
        <div style={{marginTop:"10%", marginLeft:"3%"}}>
            <div>
                {runningId}
            </div>
            <div>
            <   p>러닝 크루 상세</p>
            </div>
            <div style={{height:"250px"}}>

            </div>
            <div>
                <HStack spacing='24px'>
                    <Box w='70px' h='10' bg='teal.500' style={{textAlign:"center", background: "grey"}}>hastag1</Box>
                    <Box w='70px' h='10' bg='teal.500' style={{textAlign:"center", background: "grey"}}>hastag2 </Box>
                    <Box w='70px' h='10' bg='teal.500' style={{textAlign:"center", background: "grey"}}> hastag3</Box>
                </HStack>
            </div>
            <div style={{marginTop:"3%"}}>
                <HStack spacing='24px'>
                    <div>
                        <Box w='170px' h='10' bg='teal.500' style={{textAlign:"center", background: "white"}}> 같이 뛰실 분  구해요</Box>
                        <p style={{textAlign:"center"}}>이름</p>
                    </div>
                    <Box w='70px' h='10' bg='teal.500' style={{textAlign:"center", background: "grey"}}> 인증  </Box>
                    <Box w='70px' h='10' bg='teal.500' style={{textAlign:"center", background: "grey"}}> 채팅방</Box>
                </HStack>
            </div>

            <div>
                <blockquote>
                    안녕하세요?
                    저는 같이 뛰고 싶은 사람이예요.
                </blockquote>
            </div>


        </div>
      <Footer></Footer>
    </div>
  );
}

export default RunningDetail;
