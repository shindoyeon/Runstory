import React, {useState, useEffect} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import {Box, Button, Spacer} from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios'

function RunningDetail(){
    const {feedId} = useParams();
    const [mycrews, setMycrews] = useState([]);
    const [joincrews, setJoincrews] = useState([]);
    const [dibscrews, setDibscrews] = useState([]);
    const [pastcrews, setPastcrews] = useState([]);
    useEffect(() => {
        (async () => {
            const url = "running/mycrew/reservation";
            const data = await axios.get(url)
                .then(function(response) {
                    setMycrews(response.data.data[0])
                    setJoincrews(response.data.data[1])
                    setDibscrews(response.data.data[2])
                    setPastcrews(response.data.data[3])
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
    // var commenturl = "https://i8a806.p.ssafy.io/runstory/user/" + user.profileImgFileName;

    // function GotoComment() {
    //     const url = `running/${feedId}/comment`;
    //     axios.get(url)
    //         .then(function(response) {
    //             console.log("성공");
    //         })
    //         .catch(function(error) {
    //             console.log("실패");
    //         })
    // }

    return (
    <div style={{marginBottom: "15%"}}>
        <Header></Header>
        <div>
            {/* {
                mycrews.map(function(mycrew){
                    <div>{mycrew.crewName}</div>
                })
            } */}
        </div>
      <Footer></Footer>
    </div>
  );
}

export default RunningDetail;
